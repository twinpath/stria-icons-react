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
var Fish_exports = {};
__export(Fish_exports, {
  default: () => Fish_default
});
module.exports = __toCommonJS(Fish_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FishRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M323.87 64C231.68 64 160.334 125.5 126.397 161.672L65.051 112.5C52.301 101.391 34.614 99.625 20.081 107.953C5.299 116.406 -2.482 133.438 0.956 151.422L25.739 256L0.706 361.625C-2.482 378.531 5.331 395.578 20.112 404.031C34.645 412.406 52.27 410.609 64.176 400.203L126.303 350.328C160.334 386.484 231.743 448 323.87 448C462.561 448 576 303.047 576 256S462.561 64 323.87 64ZM323.87 400C252.899 400 186.366 349.422 147.772 302.078L132.741 283.625L53.426 347.297L75.051 256L53.395 164.656L132.834 228.391L147.897 209.891C186.397 162.562 252.836 112 323.87 112C434.153 112 525.373 232.438 528.03 255.547C525.373 279.562 434.153 400 323.87 400ZM416 224C398.327 224 384 238.326 384 256C384 273.672 398.327 288 416 288S448 273.672 448 256C448 238.326 433.674 224 416 224Z" })
  }
));
FishRegular.displayName = "FishRegular";
var Fish_default = FishRegular;
