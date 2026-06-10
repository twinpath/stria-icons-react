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
var ObjectUngroup_exports = {};
__export(ObjectUngroup_exports, {
  default: () => ObjectUngroup_default
});
module.exports = __toCommonJS(ObjectUngroup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ObjectUngroupDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 256V416H624C632.838 416 640 423.164 640 432V496C640 504.836 632.838 512 624 512H560C551.164 512 544 504.836 544 496V480H288V496C288 504.836 280.838 512 272 512H208C199.164 512 192 504.836 192 496V432C192 423.164 199.164 416 208 416H224V352H288V416H544V256H477.082C472.238 242.42 461.592 231.561 448 226.742V192H544V176C544 167.164 551.164 160 560 160H624C632.838 160 640 167.164 640 176V240C640 248.836 632.838 256 624 256H608Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 96C440.838 96 448 88.836 448 80V16C448 7.164 440.838 0 432 0H368C359.164 0 352 7.164 352 16V32H96V16C96 7.164 88.838 0 80 0H16C7.164 0 0 7.164 0 16V80C0 88.836 7.164 96 16 96H32V256H16C7.164 256 0 263.164 0 272V336C0 344.836 7.164 352 16 352H80C88.838 352 96 344.836 96 336V320H352V336C352 344.836 359.164 352 368 352H432C440.838 352 448 344.836 448 336V272C448 263.164 440.838 256 432 256H416V96H432ZM352 256H96V96H352V256Z" })
    ]
  }
));
ObjectUngroupDuotone.displayName = "ObjectUngroupDuotone";
var ObjectUngroup_default = ObjectUngroupDuotone;
