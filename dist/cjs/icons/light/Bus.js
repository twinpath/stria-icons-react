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
var Bus_exports = {};
__export(Bus_exports, {
  default: () => Bus_default
});
module.exports = __toCommonJS(Bus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BusLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 376C429.254 376 440 365.254 440 352S429.254 328 416 328S392 338.746 392 352S402.746 376 416 376ZM16 128C7.164 128 0 135.164 0 144V240C0 248.836 7.164 256 16 256S32 248.836 32 240V144C32 135.164 24.836 128 16 128ZM288 0C163.25 0 64 51.25 64 96V384C64 407.506 76.986 427.93 96 439.057V496C96 504.836 103.164 512 112 512S128 504.836 128 496V448H448V496C448 504.836 455.164 512 464 512S480 504.836 480 496V439.057C499.014 427.93 512 407.506 512 384V96C512 51.25 412.75 0 288 0ZM480 384C480 401.645 465.645 416 448 416H128C110.355 416 96 401.645 96 384L95.998 288H480V384ZM95.996 160H272V256H95.998L95.996 160ZM480 256H304V160H480V256ZM480 128H95.996V96.105C97.754 80.146 168.65 32 288 32S478.246 80.146 480 96V128ZM160 376C173.254 376 184 365.254 184 352S173.254 328 160 328S136 338.746 136 352S146.746 376 160 376ZM560 128C551.164 128 544 135.164 544 144V240C544 248.836 551.164 256 560 256S576 248.836 576 240V144C576 135.164 568.836 128 560 128ZM336 64H240C231.164 64 224 71.164 224 80S231.164 96 240 96H336C344.836 96 352 88.836 352 80S344.836 64 336 64Z" })
  }
));
BusLight.displayName = "BusLight";
var Bus_default = BusLight;
