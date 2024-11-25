import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // use gloabl validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform :true
    })
  );

  /**
   * swager configuration
   */
  const config = new DocumentBuilder()
  .setTitle('NestJS Masterclass - Blog app API')
  .setDescription('Use the base API URL as http://localhost:3000')
  .setTermsOfService('http://localhost:3000/terms-of-service')
  .setLicense(
    'MIT License',
    'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
  )
  .addServer('http://localhost:3000/')
  .setVersion('1.0')
  .build();         // Build the configuration object
// Create a Document Object
  const document = SwaggerModule.createDocument(app, config);
  // Set Up Swagger
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
