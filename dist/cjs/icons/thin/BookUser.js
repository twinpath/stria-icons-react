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
var BookUser_exports = {};
__export(BookUser_exports, {
  default: () => BookUser_default
});
module.exports = __toCommonJS(BookUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookUserThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 384V32C448 14.328 433.674 0 416 0H64C28.654 0 0 28.652 0 64V455.984C0 486.91 25.07 511.984 55.998 511.984L439.994 511.992C444.416 511.996 448 508.41 448 503.992C448 499.57 444.416 495.984 439.994 495.984H416V416C433.674 416 448 401.672 448 384ZM400 495.984H56C32.623 495.984 13.877 475.844 16.193 452C18.213 431.219 36.889 415.984 57.77 415.984L400 416V495.984ZM56 399.988C40.324 399.988 26.176 406.504 16 416.922V64C16 37.531 37.533 16 64 16H416C424.836 16 432 23.164 432 32V384C432 392.824 424.822 400 416 400L56 399.988ZM240 208C275.348 208 304 179.344 304 144S275.348 80 240 80C204.656 80 176 108.656 176 144S204.656 208 240 208ZM240 96C266.469 96 288 117.531 288 144S266.469 192 240 192S192 170.469 192 144S213.531 96 240 96ZM272 240H208C163.891 240 128 275.891 128 320V328C128 332.422 131.578 336 136 336S144 332.422 144 328V320C144 284.703 172.703 256 208 256H272C307.297 256 336 284.703 336 320V328C336 332.422 339.578 336 344 336S352 332.422 352 328V320C352 275.891 316.109 240 272 240Z" })
  }
));
BookUserThin.displayName = "BookUserThin";
var BookUser_default = BookUserThin;
