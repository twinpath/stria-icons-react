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
var SquarePlus_exports = {};
__export(SquarePlus_exports, {
  default: () => SquarePlus_default
});
module.exports = __toCommonJS(SquarePlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquarePlusDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM319.998 280H247.996V352C247.996 365.197 237.195 376 223.998 376C210.797 376 199.996 365.197 199.996 352V280H127.998C114.797 280 103.996 269.197 103.996 256C103.996 242.799 114.797 232 127.998 232H199.996V160C199.996 146.799 210.797 136 223.998 136C237.195 136 247.996 146.799 247.996 160V232H319.998C333.195 232 343.996 242.799 343.996 256C343.996 269.197 333.195 280 319.998 280Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.002 280H248V352C248 365.197 237.199 376 224.002 376C210.801 376 200 365.197 200 352V280H128.002C114.801 280 104 269.197 104 256C104 242.799 114.801 232 128.002 232H200V160C200 146.799 210.801 136 224.002 136C237.199 136 248 146.799 248 160V232H320.002C333.199 232 344 242.799 344 256C344 269.197 333.199 280 320.002 280Z" })
    ]
  }
));
SquarePlusDuotone.displayName = "SquarePlusDuotone";
var SquarePlus_default = SquarePlusDuotone;
