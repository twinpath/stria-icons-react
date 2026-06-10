var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var BurgerSoda_exports = {};
__export(BurgerSoda_exports, {
  default: () => BurgerSoda_default
});
module.exports = __toCommonJS(BurgerSoda_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BurgerSodaThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M248 496H108.656C96.406 496 86.125 486.828 84.781 474.641L48.039 144H344C348.406 144 352 140.422 352 136S348.406 128 344 128H186.234L209.688 34.172C212.375 23.469 221.969 16 233 16H280C284.406 16 288 12.422 288 8S284.406 0 280 0H233C214.594 0 198.656 12.453 194.188 30.297L169.766 128H8C3.594 128 0 131.578 0 136S3.594 144 8 144H32.32C32.312 144.326 32.023 144.559 32.062 144.891L68.906 476.406C71.125 496.703 88.219 512 108.656 512H248C252.406 512 256 508.422 256 504S252.406 496 248 496ZM448 268C454.656 268 460 262.656 460 256S454.656 244 448 244S436 249.344 436 256S441.344 268 448 268ZM364 288C370.656 288 376 282.656 376 276S370.656 264 364 264S352 269.344 352 276S357.344 288 364 288ZM532 288C538.656 288 544 282.656 544 276S538.656 264 532 264S520 269.344 520 276S525.344 288 532 288ZM616 342.658V304C616 282.125 606.594 261.156 588.781 243.391C557.969 212.625 501.562 192 448.375 192C448.156 191.969 447.906 191.984 447.656 192C394.438 192 338.031 212.625 307.219 243.391C289.406 261.156 280 282.125 280 304V342.658C265.711 350.975 256 366.279 256 384S265.711 417.025 280 425.342V468C280 492.266 299.75 512 324 512H572C596.25 512 616 492.266 616 468V425.342C630.289 417.025 640 401.721 640 384S630.289 350.975 616 342.658ZM296 304C296 286.219 303.562 269.625 318.531 254.719C346.531 226.75 398.375 208 447.688 208C447.906 208.031 448.188 208.016 448.344 208C497.625 208 549.469 226.75 577.469 254.719C592.438 269.625 600 286.219 600 304V336.807C597.383 336.365 594.742 336 592 336H304C301.258 336 298.617 336.365 296 336.807V304ZM600 468C600 483.438 587.438 496 572 496H324C308.562 496 296 483.438 296 468V431.193C298.617 431.635 301.258 432 304 432H592C594.742 432 597.383 431.635 600 431.193V468ZM592 416H304C286.355 416 272 401.645 272 384S286.355 352 304 352H592C609.645 352 624 366.355 624 384S609.645 416 592 416Z" })
  }
));
BurgerSodaThin.displayName = "BurgerSodaThin";
var BurgerSoda_default = BurgerSodaThin;
