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
var BoxCheck_exports = {};
__export(BoxCheck_exports, {
  default: () => BoxCheck_default
});
module.exports = __toCommonJS(BoxCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.244 146.486L392.844 49.689C387.424 38.848 376.344 32 364.223 32H83.777C71.656 32 60.576 38.848 55.156 49.689L6.756 146.486C2.312 155.373 0 165.172 0 175.107V448C0 465.672 14.326 480 32 480H416C433.674 480 448 465.672 448 448V175.107C448 165.172 445.688 155.373 441.244 146.486ZM232 48H364.223C370.322 48 375.805 51.389 378.533 56.844L426.934 153.641C427.943 155.66 428.52 157.857 429.234 160H232V48ZM21.066 153.643L69.467 56.844C72.195 51.389 77.678 48 83.777 48H216V160H18.768C19.48 157.857 20.057 155.662 21.066 153.643ZM432 448C432 456.822 424.822 464 416 464H32C23.178 464 16 456.822 16 448V176H432V448ZM194.344 381.656C195.906 383.219 197.938 384 200 384S204.094 383.219 205.656 381.656L325.656 261.656C328.781 258.531 328.781 253.469 325.656 250.344S317.469 247.219 314.344 250.344L200 364.688L141.656 306.344C138.531 303.219 133.469 303.219 130.344 306.344S127.219 314.531 130.344 317.656L194.344 381.656Z" })
  }
));
BoxCheckThin.displayName = "BoxCheckThin";
var BoxCheck_default = BoxCheckThin;
