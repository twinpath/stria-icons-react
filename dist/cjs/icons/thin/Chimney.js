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
var Chimney_exports = {};
__export(Chimney_exports, {
  default: () => Chimney_default
});
module.exports = __toCommonJS(Chimney_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChimneyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 32H32C14.326 32 0 46.326 0 64V128C0 145.672 14.326 160 32 160V472C32 476.422 35.578 480 40 480S48 476.422 48 472V384H304V472C304 476.422 307.578 480 312 480S320 476.422 320 472V384H400V472C400 476.422 403.578 480 408 480S416 476.422 416 472V160C433.674 160 448 145.672 448 128V64C448 46.326 433.674 32 416 32ZM128 256H48V160H128V256ZM48 368V272H208V368H48ZM224 368V272H400V368H224ZM400 256H144V160H400V256ZM432 128C432 136.822 424.822 144 416 144H32C23.178 144 16 136.822 16 128V64C16 55.178 23.178 48 32 48H416C424.822 48 432 55.178 432 64V128Z" })
  }
));
ChimneyThin.displayName = "ChimneyThin";
var Chimney_default = ChimneyThin;
