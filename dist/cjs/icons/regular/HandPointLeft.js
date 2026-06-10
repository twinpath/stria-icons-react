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
var HandPointLeft_exports = {};
__export(HandPointLeft_exports, {
  default: () => HandPointLeft_default
});
module.exports = __toCommonJS(HandPointLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandPointLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264 480H368C447.402 480 512 417.055 512 339.688V231.812C512 208.373 505.896 185.084 494.352 164.463L462.998 108.633C447.529 81.102 417.979 64 385.875 64H336C308.768 64 284.467 76.514 268.311 96H72C32.299 96 0 128.299 0 168S32.299 240 72 240H128.441C128.148 242.627 128 245.295 128 248C128 273.945 141.795 296.729 162.434 309.402C160.846 315.338 160 321.572 160 328C160 353.945 173.795 376.729 194.434 389.402C192.846 395.338 192 401.572 192 408C192 447.701 224.299 480 264 480ZM280 304C293.234 304 304 314.781 304 328S293.234 352 280 352H232C218.766 352 208 341.219 208 328S218.766 304 232 304H280ZM248 224V236C248 248.391 251.264 259.926 256.545 270.27C253.875 271.299 251.029 272 248 272H200C186.766 272 176 261.219 176 248S186.766 224 200 224H248ZM248 144C248.281 144 248.514 144.15 248.793 144.16C248.557 146.783 248 149.314 248 152V192H72C58.766 192 48 181.219 48 168S58.766 144 72 144H248ZM388.164 429.869C390.443 422.941 392 415.684 392 408C392 378.965 374.635 354.035 349.822 342.658C350.834 337.836 352 333.041 352 328C352 320.861 350.727 314.041 348.645 307.545C378.422 297.246 400 269.234 400 236V184C400 170.75 389.25 160 376 160S352 170.75 352 184V236C352 251.438 339.438 264 324 264S296 251.438 296 236V152C296 129.938 313.938 112 336 112H385.875C400.641 112 414.156 119.719 421.141 132.156L452.484 187.938C460.016 201.406 464 216.562 464 231.812V339.688C464 383.934 431.436 420.926 388.164 429.869ZM264 432C250.766 432 240 421.219 240 408S250.766 384 264 384H320C333.234 384 344 394.781 344 408S333.234 432 320 432H264Z" })
  }
));
HandPointLeftRegular.displayName = "HandPointLeftRegular";
var HandPointLeft_default = HandPointLeftRegular;
