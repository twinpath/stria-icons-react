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
const ObjectUngroupSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 336C352 344.836 359.164 352 368 352H432C440.838 352 448 344.836 448 336V272C448 263.164 440.838 256 432 256H416V96H432C440.838 96 448 88.836 448 80V16C448 7.164 440.838 0 432 0H368C359.164 0 352 7.164 352 16V32H96V16C96 7.164 88.838 0 80 0H16C7.164 0 0 7.164 0 16V80C0 88.836 7.164 96 16 96H32V256H16C7.164 256 0 263.164 0 272V336C0 344.836 7.164 352 16 352H80C88.838 352 96 344.836 96 336V320H352V336ZM96 256V96H352V256H96ZM624 256C632.838 256 640 248.836 640 240V176C640 167.164 632.838 160 624 160H560C551.164 160 544 167.164 544 176V192H448V226.742C461.592 231.561 472.238 242.42 477.082 256H544V416H288V352H224V416H208C199.164 416 192 423.164 192 432V496C192 504.836 199.164 512 208 512H272C280.838 512 288 504.836 288 496V480H544V496C544 504.836 551.164 512 560 512H624C632.838 512 640 504.836 640 496V432C640 423.164 632.838 416 624 416H608V256H624Z" })
  }
));
ObjectUngroupSolid.displayName = "ObjectUngroupSolid";
var ObjectUngroup_default = ObjectUngroupSolid;
