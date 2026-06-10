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
var FireHydrant_exports = {};
__export(FireHydrant_exports, {
  default: () => FireHydrant_default
});
module.exports = __toCommonJS(FireHydrant_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireHydrantThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360 352V288C360 265.938 342.062 248 320 248V200C320 195.578 316.422 192 312 192S304 195.578 304 200V496H80V200C80 195.578 76.422 192 72 192S64 195.578 64 200V248C41.938 248 24 265.938 24 288V352C24 374.062 41.938 392 64 392V496H40C35.578 496 32 499.594 32 504S35.578 512 40 512H344C348.422 512 352 508.406 352 504S348.422 496 344 496H320V392C342.062 392 360 374.062 360 352ZM320 264C333.234 264 344 274.766 344 288V352C344 365.219 333.234 376 320 376V264ZM64 376C50.766 376 40 365.219 40 352V288C40 274.766 50.766 264 64 264V376ZM112 320C112 364.125 147.891 400 192 400S272 364.125 272 320C272 275.891 236.109 240 192 240S112 275.891 112 320ZM256 320C256 355.281 227.297 384 192 384S128 355.281 128 320C128 284.703 156.703 256 192 256S256 284.703 256 320ZM40 168H344C348.422 168 352 164.422 352 160S348.422 152 344 152H320C320 84.162 266.793 29.029 200 24.809V8C200 3.578 196.422 0 192 0S184 3.578 184 8V24.809C117.207 29.029 64 84.162 64 152H40C35.578 152 32 155.578 32 160S35.578 168 40 168ZM192 40C253.75 40 304 90.25 304 152H80C80 90.25 130.25 40 192 40Z" })
  }
));
FireHydrantThin.displayName = "FireHydrantThin";
var FireHydrant_default = FireHydrantThin;
