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
var CameraPolaroid_exports = {};
__export(CameraPolaroid_exports, {
  default: () => CameraPolaroid_default
});
module.exports = __toCommonJS(CameraPolaroid_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraPolaroidLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 112C243.891 112 208 147.875 208 192S243.891 272 288 272S368 236.125 368 192S332.109 112 288 112ZM288 240C261.531 240 240 218.469 240 192S261.531 144 288 144S336 165.531 336 192S314.469 240 288 240ZM561.977 318.467L512 256V96C512 60.652 483.348 32 448 32H128C92.654 32 64 60.652 64 96V256L14.025 318.471C4.947 329.818 0 343.918 0 358.451V416C0 451.199 28.801 480 64 480H512C547.201 480 576 451.199 576 416V358.447C576 343.916 571.055 329.814 561.977 318.467ZM96 267.225V96C96 78.326 110.328 64 128 64H448C465.674 64 480 78.326 480 96V267.225L522.221 320H53.779L96 267.225ZM544 416C544 433.6 529.6 448 512 448H64C46.4 448 32 433.6 32 416V352.143L32.143 352H543.857C543.914 352.055 543.945 352.086 544 352.143V416ZM464 384H112C103.164 384 96 391.162 96 400C96 408.836 103.164 416 112 416H464C472.838 416 480 408.836 480 400C480 391.162 472.838 384 464 384ZM416 104C402.746 104 392 114.744 392 128C392 141.254 402.746 152 416 152C429.256 152 440 141.254 440 128C440 114.744 429.256 104 416 104Z" })
  }
));
CameraPolaroidLight.displayName = "CameraPolaroidLight";
var CameraPolaroid_default = CameraPolaroidLight;
