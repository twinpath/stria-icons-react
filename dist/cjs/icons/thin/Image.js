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
var Image_exports = {};
__export(Image_exports, {
  default: () => Image_default
});
module.exports = __toCommonJS(Image_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImageThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32H48C21.492 32 0 53.49 0 80V432C0 458.51 21.492 480 48 480H464C490.508 480 512 458.51 512 432V80C512 53.49 490.508 32 464 32ZM48 464C30.355 464 16 449.645 16 432V380.688L122.344 274.344C125.469 271.219 130.531 271.219 133.656 274.344L212.688 353.375L102.062 464H48ZM496 432C496 449.645 481.645 464 464 464H124.688L378.344 210.344C381.469 207.219 386.531 207.219 389.656 210.344L496 316.688V432ZM496 294.062L400.969 199.031C391.594 189.687 376.406 189.687 367.031 199.031L224 342.062L144.969 263.031C135.594 253.688 120.406 253.688 111.031 263.031L16 358.062V80C16 62.355 30.355 48 48 48H464C481.645 48 496 62.355 496 80V294.062ZM128 104C97.07 104 72 129.072 72 160S97.07 216 128 216S184 190.928 184 160S158.93 104 128 104ZM128 200C105.945 200 88 182.055 88 160C88 137.943 105.945 120 128 120S168 137.943 168 160C168 182.055 150.055 200 128 200Z" })
  }
));
ImageThin.displayName = "ImageThin";
var Image_default = ImageThin;
