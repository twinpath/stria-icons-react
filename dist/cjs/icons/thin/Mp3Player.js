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
var Mp3Player_exports = {};
__export(Mp3Player_exports, {
  default: () => Mp3Player_default
});
module.exports = __toCommonJS(Mp3Player_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Mp3PlayerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V64C384 28.654 355.346 0 320 0ZM368 448C368 474.467 346.467 496 320 496H64C37.533 496 16 474.467 16 448V64C16 37.533 37.533 16 64 16H320C346.467 16 368 37.533 368 64V448ZM192 224C130.166 224 80 274.166 80 336S130.166 448 192 448S304 397.834 304 336S253.834 224 192 224ZM192 432C139.066 432 96 388.936 96 336S139.066 240 192 240C244.936 240 288 283.064 288 336S244.936 432 192 432ZM288 64H96C78.326 64 64 78.326 64 96V160C64 177.674 78.326 192 96 192H288C305.674 192 320 177.674 320 160V96C320 78.326 305.674 64 288 64ZM304 160C304 168.822 296.822 176 288 176H96C87.178 176 80 168.822 80 160V96C80 87.178 87.178 80 96 80H288C296.822 80 304 87.178 304 96V160ZM192 304C174.375 304 160 318.375 160 336S174.375 368 192 368S224 353.625 224 336S209.625 304 192 304ZM192 352C183.178 352 176 344.822 176 336S183.178 320 192 320S208 327.178 208 336S200.822 352 192 352Z" })
  }
));
Mp3PlayerThin.displayName = "Mp3PlayerThin";
var Mp3Player_default = Mp3PlayerThin;
