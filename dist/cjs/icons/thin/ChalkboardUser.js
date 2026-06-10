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
var ChalkboardUser_exports = {};
__export(ChalkboardUser_exports, {
  default: () => ChalkboardUser_default
});
module.exports = __toCommonJS(ChalkboardUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChalkboardUserThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 0H184C170.781 0 160 10.766 160 24V88C160 92.422 163.594 96 168 96S176 92.422 176 88V24C176 19.594 179.594 16 184 16H616C620.406 16 624 19.594 624 24V392C624 396.406 620.406 400 616 400H544V336C544 327.162 536.836 320 528 320H400C391.164 320 384 327.162 384 336V400H360C355.594 400 352 403.578 352 408S355.594 416 360 416H616C629.219 416 640 405.234 640 392V24C640 10.766 629.219 0 616 0ZM528 400H400V336H528V400ZM192 352H128C57.307 352 0 409.307 0 480C0 497.672 14.326 512 32 512H288C305.674 512 320 497.672 320 480C320 409.307 262.693 352 192 352ZM288 496H32C23.178 496 16 488.822 16 480C16 418.242 66.242 368 128 368H192C253.758 368 304 418.242 304 480C304 488.822 296.822 496 288 496ZM160 320C213.02 320 256 277.02 256 224S213.02 128 160 128S64 170.98 64 224S106.98 320 160 320ZM160 144C204.111 144 240 179.887 240 224C240 268.111 204.111 304 160 304S80 268.111 80 224C80 179.887 115.889 144 160 144Z" })
  }
));
ChalkboardUserThin.displayName = "ChalkboardUserThin";
var ChalkboardUser_default = ChalkboardUserThin;
