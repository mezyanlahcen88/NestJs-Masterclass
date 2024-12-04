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
                                            'data-bs-target="#controllers-links-module-AppModule-e6df56bc126444e2c1a6a413c25c6200b8634d94f694c84ac8587a3e2bc95a6b8f63b87025b4dd2263f4704510748115ba0ed0fd02b39cdc20fb05123653beea"' : 'data-bs-target="#xs-controllers-links-module-AppModule-e6df56bc126444e2c1a6a413c25c6200b8634d94f694c84ac8587a3e2bc95a6b8f63b87025b4dd2263f4704510748115ba0ed0fd02b39cdc20fb05123653beea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-e6df56bc126444e2c1a6a413c25c6200b8634d94f694c84ac8587a3e2bc95a6b8f63b87025b4dd2263f4704510748115ba0ed0fd02b39cdc20fb05123653beea"' :
                                            'id="xs-controllers-links-module-AppModule-e6df56bc126444e2c1a6a413c25c6200b8634d94f694c84ac8587a3e2bc95a6b8f63b87025b4dd2263f4704510748115ba0ed0fd02b39cdc20fb05123653beea"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-e6df56bc126444e2c1a6a413c25c6200b8634d94f694c84ac8587a3e2bc95a6b8f63b87025b4dd2263f4704510748115ba0ed0fd02b39cdc20fb05123653beea"' : 'data-bs-target="#xs-injectables-links-module-AppModule-e6df56bc126444e2c1a6a413c25c6200b8634d94f694c84ac8587a3e2bc95a6b8f63b87025b4dd2263f4704510748115ba0ed0fd02b39cdc20fb05123653beea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-e6df56bc126444e2c1a6a413c25c6200b8634d94f694c84ac8587a3e2bc95a6b8f63b87025b4dd2263f4704510748115ba0ed0fd02b39cdc20fb05123653beea"' :
                                        'id="xs-injectables-links-module-AppModule-e6df56bc126444e2c1a6a413c25c6200b8634d94f694c84ac8587a3e2bc95a6b8f63b87025b4dd2263f4704510748115ba0ed0fd02b39cdc20fb05123653beea"' }>
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
                                            'data-bs-target="#controllers-links-module-PostsModule-00033f1d2003aacc79842f52496084cc2c4f53c615651d4f96d3c053b15d695767bdd0416f0b106aba644f6d45daf7942a20a3d497a588660326aa33ce39fb32"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-00033f1d2003aacc79842f52496084cc2c4f53c615651d4f96d3c053b15d695767bdd0416f0b106aba644f6d45daf7942a20a3d497a588660326aa33ce39fb32"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-00033f1d2003aacc79842f52496084cc2c4f53c615651d4f96d3c053b15d695767bdd0416f0b106aba644f6d45daf7942a20a3d497a588660326aa33ce39fb32"' :
                                            'id="xs-controllers-links-module-PostsModule-00033f1d2003aacc79842f52496084cc2c4f53c615651d4f96d3c053b15d695767bdd0416f0b106aba644f6d45daf7942a20a3d497a588660326aa33ce39fb32"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-00033f1d2003aacc79842f52496084cc2c4f53c615651d4f96d3c053b15d695767bdd0416f0b106aba644f6d45daf7942a20a3d497a588660326aa33ce39fb32"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-00033f1d2003aacc79842f52496084cc2c4f53c615651d4f96d3c053b15d695767bdd0416f0b106aba644f6d45daf7942a20a3d497a588660326aa33ce39fb32"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-00033f1d2003aacc79842f52496084cc2c4f53c615651d4f96d3c053b15d695767bdd0416f0b106aba644f6d45daf7942a20a3d497a588660326aa33ce39fb32"' :
                                        'id="xs-injectables-links-module-PostsModule-00033f1d2003aacc79842f52496084cc2c4f53c615651d4f96d3c053b15d695767bdd0416f0b106aba644f6d45daf7942a20a3d497a588660326aa33ce39fb32"' }>
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
                                <a href="modules/TagModule.html" data-type="entity-link" >TagModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TagModule-529ec46811c1ad79c831889bf44be393a38c7fbb862cb50e6732b8a4e0ae393936b0acb3cc582f78a9ae5fea41dc9674d3988f7331744b5bd1e609f730bb0bef"' : 'data-bs-target="#xs-controllers-links-module-TagModule-529ec46811c1ad79c831889bf44be393a38c7fbb862cb50e6732b8a4e0ae393936b0acb3cc582f78a9ae5fea41dc9674d3988f7331744b5bd1e609f730bb0bef"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagModule-529ec46811c1ad79c831889bf44be393a38c7fbb862cb50e6732b8a4e0ae393936b0acb3cc582f78a9ae5fea41dc9674d3988f7331744b5bd1e609f730bb0bef"' :
                                            'id="xs-controllers-links-module-TagModule-529ec46811c1ad79c831889bf44be393a38c7fbb862cb50e6732b8a4e0ae393936b0acb3cc582f78a9ae5fea41dc9674d3988f7331744b5bd1e609f730bb0bef"' }>
                                            <li class="link">
                                                <a href="controllers/TagController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TagModule-529ec46811c1ad79c831889bf44be393a38c7fbb862cb50e6732b8a4e0ae393936b0acb3cc582f78a9ae5fea41dc9674d3988f7331744b5bd1e609f730bb0bef"' : 'data-bs-target="#xs-injectables-links-module-TagModule-529ec46811c1ad79c831889bf44be393a38c7fbb862cb50e6732b8a4e0ae393936b0acb3cc582f78a9ae5fea41dc9674d3988f7331744b5bd1e609f730bb0bef"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagModule-529ec46811c1ad79c831889bf44be393a38c7fbb862cb50e6732b8a4e0ae393936b0acb3cc582f78a9ae5fea41dc9674d3988f7331744b5bd1e609f730bb0bef"' :
                                        'id="xs-injectables-links-module-TagModule-529ec46811c1ad79c831889bf44be393a38c7fbb862cb50e6732b8a4e0ae393936b0acb3cc582f78a9ae5fea41dc9674d3988f7331744b5bd1e609f730bb0bef"' }>
                                        <li class="link">
                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-b2f3f302790de5470b10827b987816559bceea10572647d0ec9660f5e5a345331a3098172221efb7a8aacb2365473367de13614e1c5341c28af4df5b359b0949"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-b2f3f302790de5470b10827b987816559bceea10572647d0ec9660f5e5a345331a3098172221efb7a8aacb2365473367de13614e1c5341c28af4df5b359b0949"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-b2f3f302790de5470b10827b987816559bceea10572647d0ec9660f5e5a345331a3098172221efb7a8aacb2365473367de13614e1c5341c28af4df5b359b0949"' :
                                            'id="xs-controllers-links-module-UsersModule-b2f3f302790de5470b10827b987816559bceea10572647d0ec9660f5e5a345331a3098172221efb7a8aacb2365473367de13614e1c5341c28af4df5b359b0949"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-b2f3f302790de5470b10827b987816559bceea10572647d0ec9660f5e5a345331a3098172221efb7a8aacb2365473367de13614e1c5341c28af4df5b359b0949"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-b2f3f302790de5470b10827b987816559bceea10572647d0ec9660f5e5a345331a3098172221efb7a8aacb2365473367de13614e1c5341c28af4df5b359b0949"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-b2f3f302790de5470b10827b987816559bceea10572647d0ec9660f5e5a345331a3098172221efb7a8aacb2365473367de13614e1c5341c28af4df5b359b0949"' :
                                        'id="xs-injectables-links-module-UsersModule-b2f3f302790de5470b10827b987816559bceea10572647d0ec9660f5e5a345331a3098172221efb7a8aacb2365473367de13614e1c5341c28af4df5b359b0949"' }>
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
                                    <a href="controllers/TagController.html" data-type="entity-link" >TagController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Post.html" data-type="entity-link" >Post</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
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
                                <a href="classes/CreateTagDto.html" data-type="entity-link" >CreateTagDto</a>
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
                                <a href="classes/Tag.html" data-type="entity-link" >Tag</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCatDto.html" data-type="entity-link" >UpdateCatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTagDto.html" data-type="entity-link" >UpdateTagDto</a>
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
                                    <a href="injectables/TagService.html" data-type="entity-link" >TagService</a>
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