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
var MessageMusic_exports = {};
__export(MessageMusic_exports, {
  default: () => MessageMusic_default
});
module.exports = __toCommonJS(MessageMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessageMusicLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.84 171.025 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM480 352.002C480 369.602 465.6 384.002 448 384.002H303.924C296.996 384.002 290.254 386.25 284.713 390.408L192 460.002V400.002C192 391.164 184.836 384.002 176 384.002H64C46.4 384.002 32 369.602 32 352.002V64C32 46.4 46.4 32 64 32H448C465.6 32 480 46.4 480 64V352.002ZM338.193 92.812C329.568 86.812 318.568 85.375 308.693 89.125L212.693 125.125C200.287 129.781 191.943 141.812 191.943 155.094V228.814C184.641 225.818 176.564 224 167.943 224C137.068 224 111.943 245.531 111.943 272S137.068 320 167.943 320S223.943 298.469 223.943 272V155.062L319.943 119.094V196.814C312.641 193.818 304.564 192 295.943 192C265.068 192 239.943 213.531 239.943 240S265.068 288 295.943 288S351.943 266.469 351.943 240V119.094C351.943 108.594 346.787 98.781 338.193 92.812ZM167.943 288C155.162 288 143.943 280.531 143.943 272S155.162 256 167.943 256S191.943 263.469 191.943 272S180.725 288 167.943 288ZM295.943 256C283.162 256 271.943 248.531 271.943 240S283.162 224 295.943 224S319.943 231.469 319.943 240S308.725 256 295.943 256Z" })
  }
));
MessageMusicLight.displayName = "MessageMusicLight";
var MessageMusic_default = MessageMusicLight;
