/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a79ea1d86556c7d0e8460d3453a34721"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7ef0077d.js",
    "revision": "fc1bd47c28462e6748b2287fa07c6d7e"
  },
  {
    "url": "assets/js/11.e061e288.js",
    "revision": "b9c40d3293493ec57006d5df7e4bab1c"
  },
  {
    "url": "assets/js/12.58dcc9fa.js",
    "revision": "7f90f40e5b5cd940e75783cdbeab292f"
  },
  {
    "url": "assets/js/13.9f481ce6.js",
    "revision": "670699d9e24dd5c8a74bc9da51dd0bda"
  },
  {
    "url": "assets/js/14.f5b86f8b.js",
    "revision": "e26ad8ab9ab7e69cb4f66f9661973cf8"
  },
  {
    "url": "assets/js/15.30721a43.js",
    "revision": "0681c5903e43fbc429537072037d34a7"
  },
  {
    "url": "assets/js/16.8c2140cd.js",
    "revision": "be9ce048e70ec81397267fadd9dfee4d"
  },
  {
    "url": "assets/js/17.939ebf01.js",
    "revision": "731ab24b1641f24979e41171b99dcccb"
  },
  {
    "url": "assets/js/18.f867e830.js",
    "revision": "efe9576e6c46419073613304968067e6"
  },
  {
    "url": "assets/js/19.e792885f.js",
    "revision": "4973cd631651cd1ba10412b406e7b52f"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.e935096e.js",
    "revision": "053e1c28911d9674f3456384a09d7310"
  },
  {
    "url": "assets/js/21.a566f335.js",
    "revision": "90837c67d5b4826ae7ca1ea09f28ee37"
  },
  {
    "url": "assets/js/22.3d55beeb.js",
    "revision": "08830a74cf8d4a6ade6b55eda55959ff"
  },
  {
    "url": "assets/js/23.59be69aa.js",
    "revision": "e7d9ca87d0cc8a369795e94fca106332"
  },
  {
    "url": "assets/js/24.925e9dcd.js",
    "revision": "ef4244a6732debd868c532250c5ec824"
  },
  {
    "url": "assets/js/25.fd161f03.js",
    "revision": "a1b528282351727b5ded515a55dc1911"
  },
  {
    "url": "assets/js/26.c7672d79.js",
    "revision": "bdbc563ccdda372848e0b8f5ee9db191"
  },
  {
    "url": "assets/js/27.b5cab333.js",
    "revision": "4aa6a9e6a60538fde4ffa9e47b5ba29f"
  },
  {
    "url": "assets/js/28.beed3881.js",
    "revision": "03c5f7597f36f14642648426734043f0"
  },
  {
    "url": "assets/js/29.f6d37f87.js",
    "revision": "8e9cc52965e8716eb0e11897354412e9"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.d0f509d8.js",
    "revision": "43c4ce999b8322cf0f785be298e149b9"
  },
  {
    "url": "assets/js/31.a9e4326d.js",
    "revision": "281a19ec24d2d198d7fdfc5d6262dea5"
  },
  {
    "url": "assets/js/32.c7d67a02.js",
    "revision": "86eef9d94673f46f281ea7cfb4baa328"
  },
  {
    "url": "assets/js/33.7634af71.js",
    "revision": "cb9ce56277daf35f1e0b1dca8dc78408"
  },
  {
    "url": "assets/js/34.18c90e66.js",
    "revision": "641c49d8505ce37c7d68effc01dee97b"
  },
  {
    "url": "assets/js/35.d011b2cf.js",
    "revision": "97f40b440154c0ca0fc11b31e1f8c2b6"
  },
  {
    "url": "assets/js/36.3a3beb79.js",
    "revision": "11bb32c24fbb776164cff1f52768e5bc"
  },
  {
    "url": "assets/js/37.0902e966.js",
    "revision": "831c0a52e4e53d2dc9cdc6a17adf821c"
  },
  {
    "url": "assets/js/38.c98a6a83.js",
    "revision": "1d05b2943fa5bfcc8e643262385cd54f"
  },
  {
    "url": "assets/js/39.9ac13a95.js",
    "revision": "ce6549416b6959d0bdd42817c8a8a42e"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.06d0eb50.js",
    "revision": "60a55006a4f067c4b5c67ca13e475450"
  },
  {
    "url": "assets/js/41.53ebf0df.js",
    "revision": "d5e0f342337e0bf3d2ecc51097710a5f"
  },
  {
    "url": "assets/js/42.372501dd.js",
    "revision": "c86cd125e3ff1085358f224df2be82f1"
  },
  {
    "url": "assets/js/43.cc1cb452.js",
    "revision": "21791942398bde80696778d1b31274a9"
  },
  {
    "url": "assets/js/44.b0f6a993.js",
    "revision": "a1f1d6ed7c0f627167c0ea49f8908a89"
  },
  {
    "url": "assets/js/45.3ba05482.js",
    "revision": "57aaf2cf397a914516be0a401767fcc5"
  },
  {
    "url": "assets/js/46.668a5c23.js",
    "revision": "53c2cf0e9ef17637792ae2df50c0713a"
  },
  {
    "url": "assets/js/47.22428547.js",
    "revision": "5101f33ef681aec3cd59b8632b537c60"
  },
  {
    "url": "assets/js/48.948fdb9d.js",
    "revision": "2b808d15446e3bba5198e8645601a389"
  },
  {
    "url": "assets/js/49.5cac1a98.js",
    "revision": "c3a95a1ddac118da76c1c9e2d2c9f26e"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.373f0706.js",
    "revision": "9a1ad7b7c73feed2c9f13d645a3f1782"
  },
  {
    "url": "assets/js/51.3b20fe23.js",
    "revision": "1b77f527584a65f2256c8ddb9811a3ef"
  },
  {
    "url": "assets/js/52.1d836884.js",
    "revision": "363c829ea0f5713f5f1ad6742d516b71"
  },
  {
    "url": "assets/js/53.59b42751.js",
    "revision": "cee6ad975c0f524f983ba3c4ac13de83"
  },
  {
    "url": "assets/js/54.b4f93dbe.js",
    "revision": "6c9a4cfa6f6163cf7a0f00bb8d684d65"
  },
  {
    "url": "assets/js/55.d35c593b.js",
    "revision": "529112c773f95a1805b319f0e65cc9b2"
  },
  {
    "url": "assets/js/56.780ba6cd.js",
    "revision": "ccd2841bf4b97c8937c360e610a719c7"
  },
  {
    "url": "assets/js/57.3e3f4b34.js",
    "revision": "2c7247eb4357c9af6e6da2ae332503e8"
  },
  {
    "url": "assets/js/58.53c02d96.js",
    "revision": "e91cf4ebbc174cba86a108d6563406c9"
  },
  {
    "url": "assets/js/59.da895241.js",
    "revision": "69566dfe2653b0144ffa7f59103a754f"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.d6e316f2.js",
    "revision": "f2beda339544765aa7feca8afbde41ed"
  },
  {
    "url": "assets/js/61.72ee30a9.js",
    "revision": "a29c2d75cf350e6490bea4e5cbc46d2d"
  },
  {
    "url": "assets/js/62.05446a77.js",
    "revision": "b5cdb9932f291ca1811911e06f59287a"
  },
  {
    "url": "assets/js/63.f1fff279.js",
    "revision": "ddabeba307f9a16e4d2a389692099d1c"
  },
  {
    "url": "assets/js/64.42b7ae63.js",
    "revision": "b4726b7a79c022c5b6f46e40d5e51f16"
  },
  {
    "url": "assets/js/65.a408e868.js",
    "revision": "4a56793916cc9882dd5eb558062d4a16"
  },
  {
    "url": "assets/js/66.b2963c19.js",
    "revision": "4cec74967fbd230005e83c2b99ce8cd6"
  },
  {
    "url": "assets/js/67.e434785a.js",
    "revision": "6d22e33d260be540a46e0150d066780e"
  },
  {
    "url": "assets/js/68.ac829fd3.js",
    "revision": "dc2b0f752029201dd86fb32f68c6a2a1"
  },
  {
    "url": "assets/js/69.cae9dd45.js",
    "revision": "780152774700ecd218d75ac26fd39235"
  },
  {
    "url": "assets/js/7.8bec5bd1.js",
    "revision": "f4a433f82cd602b6bc278a56280c5713"
  },
  {
    "url": "assets/js/70.07c1e10e.js",
    "revision": "aeec9feee2ccb7a43eecf779454cefb5"
  },
  {
    "url": "assets/js/71.89790b5b.js",
    "revision": "c431cac7346cf6246a1d52d110237086"
  },
  {
    "url": "assets/js/72.c604d521.js",
    "revision": "0cb86ac04eaac1ecf0228906b9a6bfc5"
  },
  {
    "url": "assets/js/73.879f9882.js",
    "revision": "53bc64b5e70af9b76ebfbec09de8bbf5"
  },
  {
    "url": "assets/js/74.5a04f5bc.js",
    "revision": "6cfea4446dc285219c6737455291904b"
  },
  {
    "url": "assets/js/75.ebadf93a.js",
    "revision": "7a2d2f50a6415cb636cc856f5e92a372"
  },
  {
    "url": "assets/js/76.e86a0924.js",
    "revision": "47ffcb141dbc5753cec1f60b9c63e483"
  },
  {
    "url": "assets/js/77.d9b2554a.js",
    "revision": "920cee4f253eae8495af7cca7f54248a"
  },
  {
    "url": "assets/js/78.f99bee45.js",
    "revision": "e83a5685d3d41b77df4fdf0e5d299191"
  },
  {
    "url": "assets/js/79.9a981b39.js",
    "revision": "90dbac508e02a7eff3e31f8b661702b7"
  },
  {
    "url": "assets/js/8.d79de94d.js",
    "revision": "425f7bb1eb50d3104c254bb1d8a7cdfe"
  },
  {
    "url": "assets/js/80.5a051e5a.js",
    "revision": "4004c10a771a394d7e011bcecfe93d0c"
  },
  {
    "url": "assets/js/81.35410ad8.js",
    "revision": "fcfac08c21d41e6b7c0fef7b9b13197e"
  },
  {
    "url": "assets/js/82.f438d6f0.js",
    "revision": "029216db3c1b59e82f8205eecaae6ea3"
  },
  {
    "url": "assets/js/83.1321b143.js",
    "revision": "cadbd5d88db242c636772ae6fc7e085d"
  },
  {
    "url": "assets/js/84.7d60f843.js",
    "revision": "29976ae611160e08bd7bc78264ec0324"
  },
  {
    "url": "assets/js/85.99a8c19e.js",
    "revision": "fcded10a386de0d79ecba2b69871ea92"
  },
  {
    "url": "assets/js/86.926878e7.js",
    "revision": "bd73564e6b08c94c0876d9cedc8281a4"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.612b26dc.js",
    "revision": "83e98f29d2c85bb917a48541572d5dbc"
  },
  {
    "url": "assets/js/app.3a321d95.js",
    "revision": "1bf525e07bf558a213189975a0004fe4"
  },
  {
    "url": "compiler/ast.html",
    "revision": "a3a9f729405739fc84269a0951864c7f"
  },
  {
    "url": "compiler/binder.html",
    "revision": "ec644e21db7f8068595a9405dbd12cb3"
  },
  {
    "url": "compiler/checker.html",
    "revision": "a0439d44f3e77feae02ed9ac2b014962"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "e1a9d129844181ba72f2e479cd529f00"
  },
  {
    "url": "compiler/overview.html",
    "revision": "c444140572b5d616c82425c567ee7c12"
  },
  {
    "url": "compiler/parser.html",
    "revision": "fbc2373aa1f0a220efbe12a641f70452"
  },
  {
    "url": "compiler/program.html",
    "revision": "a62d81f161d254e9135258b31dce24d0"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "76386e9f5ece11fe2a5822b7ba081d2e"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "24bbbf2539c52318c827f43ac879b7fc"
  },
  {
    "url": "error/interpreting.html",
    "revision": "d16457f60ddb8df07c8a89870899fb71"
  },
  {
    "url": "faqs/class.html",
    "revision": "ca017e1c5c9a7253ea578c9d1fc03124"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "cbc56319a0c2e3893d11675b5135792e"
  },
  {
    "url": "faqs/comments.html",
    "revision": "3eb814d69e42877cbf1230da5201f855"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "90fdd46d61d620f294735811565cd354"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "7108a2a87998eb7640727c42c8ad1188"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "0b89462d409116fa245f2767dea36bf6"
  },
  {
    "url": "faqs/enums.html",
    "revision": "28fd4a2816d8984bcc00b26224b3fec6"
  },
  {
    "url": "faqs/function.html",
    "revision": "e430e0787919dd9ce616f10a37027083"
  },
  {
    "url": "faqs/generics.html",
    "revision": "aaad782fe23db5ad554362a62824d7f6"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "281e5fe613d41232355553a6f6cbe4e5"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "ebefa1731b8aceae3d3fd40904a67db7"
  },
  {
    "url": "faqs/modules.html",
    "revision": "51148b8967d818f41dedf5f6c7a65d5d"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "f8580872c1f2c8860b14ce5bf498c340"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "1d710842ea729d3ffb62e36f161467a5"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "28cdc95e8131e5b531822965a2887916"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "18da4652bf435266cfdcef1b8ce3f9f3"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "cfe07ab84b80cfb1d33c546528dd962d"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "649a01cac1f507895da276fac6644b72"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "c77aa18a5d89d4a38a6467f297f5c3b1"
  },
  {
    "url": "jsx/support.html",
    "revision": "c20814e8b5f9ff62947b6e913aca0d02"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "2ff18d6c32427dba020a1a4d67f6a566"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "18007cb601eaf4eb11385e95065d4e5e"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "d2b0fc61aaf37cd2d8bc9f36e9fcf58e"
  },
  {
    "url": "project/modules.html",
    "revision": "6621f03a20618b0fb0dfa96a25b180bc"
  },
  {
    "url": "project/namespaces.html",
    "revision": "789de4e3dd34787f22f44185ddd267bc"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "0e664400e99e5653e1ca926634362bf3"
  },
  {
    "url": "tips/barrel.html",
    "revision": "989cbee51ce212411d71a2f546ba7c51"
  },
  {
    "url": "tips/bind.html",
    "revision": "cdde316908f2c41d083010f59e045439"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "bd24da500c62d1114be6f681ae3d4573"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "cc53d66e711f23247120260a6ff16cfa"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "42b842faf862cd638af3146031b74e38"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "e2e276b2c74665632f05e2f8f6524601"
  },
  {
    "url": "tips/curry.html",
    "revision": "65a0e4ad11f82509657578457745d41f"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "a02bab3cf4ff913e284555dc3cd9151f"
  },
  {
    "url": "tips/infer.html",
    "revision": "1f36b085d90a8dcf4e0ab4bd74ccfa42"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "da15b42b95f6ed7f5999bb93e7a00658"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "a44217d1878dea6db015d502531f6972"
  },
  {
    "url": "tips/metadata.html",
    "revision": "dfd0f253081dadec3a6af1ac72813887"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "9d155be640089c002ac37dde33c5f69c"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "844ceec7b7eb9050680ec3a305469af1"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "5c672702993e11c202479c55e145ce0c"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "bf2bdd304fcbec6a3a884dd505a37010"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "270cf690c5e935f76ebbf5c715236717"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "0428734ef7851e9a2a0cf30b9a995612"
  },
  {
    "url": "tips/truthy.html",
    "revision": "a231300269f9c25922c3eeb5d7882d51"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "576dd7dfe9f549d21ff8876b9431db63"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "0414b74434cf19accd70a621c8a39640"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "7f8035a83e5114793af392a882baced9"
  },
  {
    "url": "typings/callable.html",
    "revision": "103e396321e4c3affee5d89385782715"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "f2e88fe9d4c321824747f0e30b5b2e93"
  },
  {
    "url": "typings/enums.html",
    "revision": "69eefe003d8aeca31e1a1117bd0cb392"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "7d986ec970cc9eb91c577c8dc5bbbdd8"
  },
  {
    "url": "typings/freshness.html",
    "revision": "f344c8dbfaee3e3690eface74f95a671"
  },
  {
    "url": "typings/functions.html",
    "revision": "d5ebc670b3a1f8d7aaeb9b5baef57cc5"
  },
  {
    "url": "typings/generices.html",
    "revision": "6c88c219f222590fa8a2aa5a0d493e48"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "599aa829a8e4f5b202cb822a9ae3bbcc"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "9e3cf4776f5934ea1076d662b72474f5"
  },
  {
    "url": "typings/lib.html",
    "revision": "63be66148cd2cee793b524d17f484b48"
  },
  {
    "url": "typings/literals.html",
    "revision": "ff910cb50e345a2f2ce4b5447d31594c"
  },
  {
    "url": "typings/migrating.html",
    "revision": "94cf588c28767b1ab0ff326e24be2095"
  },
  {
    "url": "typings/mixins.html",
    "revision": "90f650d55d0881aeafc4070d95cbbd0c"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "25c4f719237637858828087b15f01dbf"
  },
  {
    "url": "typings/neverType.html",
    "revision": "f3b19e304a7a30d5eab6a94477ef71bb"
  },
  {
    "url": "typings/overview.html",
    "revision": "608374a8202fbf35ae088b76e8045226"
  },
  {
    "url": "typings/readonly.html",
    "revision": "296dc6c772aeef0c5a958ebbaa665d7a"
  },
  {
    "url": "typings/thisType.html",
    "revision": "31832fe69b50aeceedb5cb737a6a4083"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "6ac65d7c3e37f735d88086cce7f91be5"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "3dbed6b8b3b100ae372561b0c1ccdcbf"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "1888b35d0fab458f326c14f9f5c9e890"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "be5ff71c5d3e4b8a2d3f285e9fce3a11"
  },
  {
    "url": "typings/types.html",
    "revision": "855d9c2e61287aa677ebd04bfb5343c0"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
