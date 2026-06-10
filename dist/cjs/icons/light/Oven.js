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
var Oven_exports = {};
__export(Oven_exports, {
  default: () => Oven_default
});
module.exports = __toCommonJS(Oven_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OvenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H96C42.98 0 0 42.98 0 96V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V96C448 42.98 405.02 0 352 0ZM416 448C416 465.645 401.645 480 384 480H64C46.355 480 32 465.645 32 448V192H416V448ZM416 160H32V96C32 60.709 60.711 32 96 32H352C387.289 32 416 60.709 416 96V160ZM96 448H352C369.674 448 384 433.672 384 416V256C384 238.326 369.674 224 352 224H96C78.326 224 64 238.326 64 256V416C64 433.672 78.326 448 96 448ZM96 256H352V416H96V256ZM304 288H144C135.164 288 128 295.162 128 304C128 312.836 135.164 320 144 320H304C312.836 320 320 312.836 320 304C320 295.162 312.836 288 304 288ZM80 96C71.164 96 64 103.162 64 112C64 120.836 71.164 128 80 128S96 120.836 96 112C96 103.162 88.836 96 80 96ZM176 96C167.164 96 160 103.162 160 112C160 120.836 167.164 128 176 128S192 120.836 192 112C192 103.162 184.836 96 176 96ZM272 96C263.164 96 256 103.162 256 112C256 120.836 263.164 128 272 128S288 120.836 288 112C288 103.162 280.836 96 272 96ZM368 96C359.164 96 352 103.162 352 112C352 120.836 359.164 128 368 128S384 120.836 384 112C384 103.162 376.836 96 368 96Z" })
  }
));
OvenLight.displayName = "OvenLight";
var Oven_default = OvenLight;
