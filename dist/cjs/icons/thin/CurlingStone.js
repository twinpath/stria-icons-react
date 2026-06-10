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
var CurlingStone_exports = {};
__export(CurlingStone_exports, {
  default: () => CurlingStone_default
});
module.exports = __toCommonJS(CurlingStone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CurlingStoneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 224V216C480 185.125 454.875 160 424 160H192V104C192 73.125 217.125 48 248 48H408C412.406 48 416 44.422 416 40S412.406 32 408 32H248C208.312 32 176 64.297 176 104V160H152C121.125 160 96 185.125 96 216V224C42.98 224 0 266.98 0 320V384C0 437.02 42.98 480 96 480H480C533.02 480 576 437.02 576 384V320C576 266.98 533.02 224 480 224ZM112 216C112 193.938 129.938 176 152 176H424C446.062 176 464 193.938 464 216V224H112V216ZM560 384C560 428.111 524.111 464 480 464H96C51.889 464 16 428.111 16 384V360H560V384ZM16 344V320C16 275.889 51.889 240 96 240H480C524.111 240 560 275.889 560 320V344H16Z" })
  }
));
CurlingStoneThin.displayName = "CurlingStoneThin";
var CurlingStone_default = CurlingStoneThin;
