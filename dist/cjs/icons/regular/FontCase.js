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
var FontCase_exports = {};
__export(FontCase_exports, {
  default: () => FontCase_default
});
module.exports = __toCommonJS(FontCase_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FontCaseRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M198.445 47.469C191.351 28.844 160.664 28.844 153.57 47.469L1.57 447.469C-3.133 459.875 3.086 473.719 15.476 478.437C27.914 483.187 41.758 476.906 46.445 464.531L83.125 368H268.89L305.57 464.531C309.211 474.125 318.336 480 328.008 480C330.851 480 333.726 479.5 336.539 478.438C348.929 473.719 355.148 459.875 350.445 447.469L198.445 47.469ZM101.365 320L176.008 123.562L250.65 320H101.365ZM616.008 160C602.758 160 592.008 170.75 592.008 184V188.889C570.021 171.104 542.424 160 512.008 160C441.429 160 384.008 217.406 384.008 288V352C384.008 422.594 441.429 480 512.008 480C542.424 480 570.021 468.896 592.008 451.111V456C592.008 469.25 602.758 480 616.008 480S640.008 469.25 640.008 456V184C640.008 170.75 629.258 160 616.008 160ZM592.008 352C592.008 396.125 556.117 432 512.008 432S432.008 396.125 432.008 352V288C432.008 243.875 467.898 208 512.008 208S592.008 243.875 592.008 288V352Z" })
  }
));
FontCaseRegular.displayName = "FontCaseRegular";
var FontCase_default = FontCaseRegular;
