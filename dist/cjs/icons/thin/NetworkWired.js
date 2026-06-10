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
var NetworkWired_exports = {};
__export(NetworkWired_exports, {
  default: () => NetworkWired_default
});
module.exports = __toCommonJS(NetworkWired_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NetworkWiredThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 320H520V264H632C636.406 264 640 260.422 640 256S636.406 248 632 248H328V192H416C433.674 192 448 177.674 448 160V32C448 14.326 433.674 0 416 0H224C206.326 0 192 14.326 192 32V160C192 177.674 206.326 192 224 192H312V248H8C3.594 248 0 251.578 0 256S3.594 264 8 264H120V320H32C14.326 320 0 334.326 0 352V480C0 497.674 14.326 512 32 512H224C241.674 512 256 497.674 256 480V352C256 334.326 241.674 320 224 320H136V264H504V320H416C398.326 320 384 334.326 384 352V480C384 497.674 398.326 512 416 512H608C625.674 512 640 497.674 640 480V352C640 334.326 625.674 320 608 320ZM208 160V32C208 23.178 215.178 16 224 16H416C424.822 16 432 23.178 432 32V160C432 168.822 424.822 176 416 176H224C215.178 176 208 168.822 208 160ZM224 336C232.822 336 240 343.178 240 352V480C240 488.822 232.822 496 224 496H32C23.178 496 16 488.822 16 480V352C16 343.178 23.178 336 32 336H224ZM624 480C624 488.822 616.822 496 608 496H416C407.178 496 400 488.822 400 480V352C400 343.178 407.178 336 416 336H608C616.822 336 624 343.178 624 352V480Z" })
  }
));
NetworkWiredThin.displayName = "NetworkWiredThin";
var NetworkWired_default = NetworkWiredThin;
