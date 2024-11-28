'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-masterclass documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-8915e305c44c81b4b184fdc9694a0dcf072b80c08ef593fc658decd1516af281a0d513630bfa9572f4f655fbc5b59262ff31830e2b52d55c8252b5f69118dd1a"' : 'data-bs-target="#xs-controllers-links-module-AppModule-8915e305c44c81b4b184fdc9694a0dcf072b80c08ef593fc658decd1516af281a0d513630bfa9572f4f655fbc5b59262ff31830e2b52d55c8252b5f69118dd1a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-8915e305c44c81b4b184fdc9694a0dcf072b80c08ef593fc658decd1516af281a0d513630bfa9572f4f655fbc5b59262ff31830e2b52d55c8252b5f69118dd1a"' :
                                            'id="xs-controllers-links-module-AppModule-8915e305c44c81b4b184fdc9694a0dcf072b80c08ef593fc658decd1516af281a0d513630bfa9572f4f655fbc5b59262ff31830e2b52d55c8252b5f69118dd1a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-8915e305c44c81b4b184fdc9694a0dcf072b80c08ef593fc658decd1516af281a0d513630bfa9572f4f655fbc5b59262ff31830e2b52d55c8252b5f69118dd1a"' : 'data-bs-target="#xs-injectables-links-module-AppModule-8915e305c44c81b4b184fdc9694a0dcf072b80c08ef593fc658decd1516af281a0d513630bfa9572f4f655fbc5b59262ff31830e2b52d55c8252b5f69118dd1a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-8915e305c44c81b4b184fdc9694a0dcf072b80c08ef593fc658decd1516af281a0d513630bfa9572f4f655fbc5b59262ff31830e2b52d55c8252b5f69118dd1a"' :
                                        'id="xs-injectables-links-module-AppModule-8915e305c44c81b4b184fdc9694a0dcf072b80c08ef593fc658decd1516af281a0d513630bfa9572f4f655fbc5b59262ff31830e2b52d55c8252b5f69118dd1a"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-5a8441cfee67d30d971fe959e23b009505d5c7ee1922ac0300405c77bf60133d0f19d212d7c1934c2f7913421a0106e8dd4bf64bfcc99c9294b4ff2c155e5d3f"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-5a8441cfee67d30d971fe959e23b009505d5c7ee1922ac0300405c77bf60133d0f19d212d7c1934c2f7913421a0106e8dd4bf64bfcc99c9294b4ff2c155e5d3f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5a8441cfee67d30d971fe959e23b009505d5c7ee1922ac0300405c77bf60133d0f19d212d7c1934c2f7913421a0106e8dd4bf64bfcc99c9294b4ff2c155e5d3f"' :
                                            'id="xs-controllers-links-module-AuthModule-5a8441cfee67d30d971fe959e23b009505d5c7ee1922ac0300405c77bf60133d0f19d212d7c1934c2f7913421a0106e8dd4bf64bfcc99c9294b4ff2c155e5d3f"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-5a8441cfee67d30d971fe959e23b009505d5c7ee1922ac0300405c77bf60133d0f19d212d7c1934c2f7913421a0106e8dd4bf64bfcc99c9294b4ff2c155e5d3f"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-5a8441cfee67d30d971fe959e23b009505d5c7ee1922ac0300405c77bf60133d0f19d212d7c1934c2f7913421a0106e8dd4bf64bfcc99c9294b4ff2c155e5d3f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5a8441cfee67d30d971fe959e23b009505d5c7ee1922ac0300405c77bf60133d0f19d212d7c1934c2f7913421a0106e8dd4bf64bfcc99c9294b4ff2c155e5d3f"' :
                                        'id="xs-injectables-links-module-AuthModule-5a8441cfee67d30d971fe959e23b009505d5c7ee1922ac0300405c77bf60133d0f19d212d7c1934c2f7913421a0106e8dd4bf64bfcc99c9294b4ff2c155e5d3f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatsModule.html" data-type="entity-link" >CatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CatsModule-b8d5702f558c7bd9d9890dd79bd8679073418c9dbe1f2fc1d3251e7ce8c6ddf279b257befcb03b4cd63ff0c070346a1fd4dda3051ad0464f55d239b6d55a9348"' : 'data-bs-target="#xs-controllers-links-module-CatsModule-b8d5702f558c7bd9d9890dd79bd8679073418c9dbe1f2fc1d3251e7ce8c6ddf279b257befcb03b4cd63ff0c070346a1fd4dda3051ad0464f55d239b6d55a9348"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatsModule-b8d5702f558c7bd9d9890dd79bd8679073418c9dbe1f2fc1d3251e7ce8c6ddf279b257befcb03b4cd63ff0c070346a1fd4dda3051ad0464f55d239b6d55a9348"' :
                                            'id="xs-controllers-links-module-CatsModule-b8d5702f558c7bd9d9890dd79bd8679073418c9dbe1f2fc1d3251e7ce8c6ddf279b257befcb03b4cd63ff0c070346a1fd4dda3051ad0464f55d239b6d55a9348"' }>
                                            <li class="link">
                                                <a href="controllers/CatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CatsModule-b8d5702f558c7bd9d9890dd79bd8679073418c9dbe1f2fc1d3251e7ce8c6ddf279b257befcb03b4cd63ff0c070346a1fd4dda3051ad0464f55d239b6d55a9348"' : 'data-bs-target="#xs-injectables-links-module-CatsModule-b8d5702f558c7bd9d9890dd79bd8679073418c9dbe1f2fc1d3251e7ce8c6ddf279b257befcb03b4cd63ff0c070346a1fd4dda3051ad0464f55d239b6d55a9348"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatsModule-b8d5702f558c7bd9d9890dd79bd8679073418c9dbe1f2fc1d3251e7ce8c6ddf279b257befcb03b4cd63ff0c070346a1fd4dda3051ad0464f55d239b6d55a9348"' :
                                        'id="xs-injectables-links-module-CatsModule-b8d5702f558c7bd9d9890dd79bd8679073418c9dbe1f2fc1d3251e7ce8c6ddf279b257befcb03b4cd63ff0c070346a1fd4dda3051ad0464f55d239b6d55a9348"' }>
                                        <li class="link">
                                            <a href="injectables/CatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' :
                                            'id="xs-controllers-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' :
                                        'id="xs-injectables-links-module-PostsModule-fd2112c2fa9e0abdcd3aac0ed86bcca400c9f1cba18f1d5e79dbe7fb4afe21f72b27288bc51a614772af3739ac2b4ba4f6ee6d29da4b904e54289839384dae77"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-ccd87074bd93da4e26445b77cda1d56304512e75ba1fd88f6cf52f2c5293f9fa2e788991604e719ec07d8e08cc0506a6ab1ac1e5a46b3a69b86461db07628875"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-ccd87074bd93da4e26445b77cda1d56304512e75ba1fd88f6cf52f2c5293f9fa2e788991604e719ec07d8e08cc0506a6ab1ac1e5a46b3a69b86461db07628875"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-ccd87074bd93da4e26445b77cda1d56304512e75ba1fd88f6cf52f2c5293f9fa2e788991604e719ec07d8e08cc0506a6ab1ac1e5a46b3a69b86461db07628875"' :
                                            'id="xs-controllers-links-module-ProductsModule-ccd87074bd93da4e26445b77cda1d56304512e75ba1fd88f6cf52f2c5293f9fa2e788991604e719ec07d8e08cc0506a6ab1ac1e5a46b3a69b86461db07628875"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-199d4cdcb54a553b7a0bd936b2901f471a3bb2e019bc40d0ba8933592c39a9f332962c651c05243452dc57d6848190d12d7d98bdd185f372188954ad177e5793"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-199d4cdcb54a553b7a0bd936b2901f471a3bb2e019bc40d0ba8933592c39a9f332962c651c05243452dc57d6848190d12d7d98bdd185f372188954ad177e5793"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-199d4cdcb54a553b7a0bd936b2901f471a3bb2e019bc40d0ba8933592c39a9f332962c651c05243452dc57d6848190d12d7d98bdd185f372188954ad177e5793"' :
                                            'id="xs-controllers-links-module-UsersModule-199d4cdcb54a553b7a0bd936b2901f471a3bb2e019bc40d0ba8933592c39a9f332962c651c05243452dc57d6848190d12d7d98bdd185f372188954ad177e5793"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-199d4cdcb54a553b7a0bd936b2901f471a3bb2e019bc40d0ba8933592c39a9f332962c651c05243452dc57d6848190d12d7d98bdd185f372188954ad177e5793"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-199d4cdcb54a553b7a0bd936b2901f471a3bb2e019bc40d0ba8933592c39a9f332962c651c05243452dc57d6848190d12d7d98bdd185f372188954ad177e5793"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-199d4cdcb54a553b7a0bd936b2901f471a3bb2e019bc40d0ba8933592c39a9f332962c651c05243452dc57d6848190d12d7d98bdd185f372188954ad177e5793"' :
                                        'id="xs-injectables-links-module-UsersModule-199d4cdcb54a553b7a0bd936b2901f471a3bb2e019bc40d0ba8933592c39a9f332962c651c05243452dc57d6848190d12d7d98bdd185f372188954ad177e5793"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CatsController.html" data-type="entity-link" >CatsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductsController.html" data-type="entity-link" >ProductsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cat.html" data-type="entity-link" >Cat</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCatDto.html" data-type="entity-link" >CreateCatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDto.html" data-type="entity-link" >CreatePostMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCatDto.html" data-type="entity-link" >UpdateCatDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatsService.html" data-type="entity-link" >CatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});