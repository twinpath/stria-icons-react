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
var BorderOuter_exports = {};
__export(BorderOuter_exports, {
  default: () => BorderOuter_default
});
module.exports = __toCommonJS(BorderOuter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BorderOuterRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 232H120C111.164 232 104 239.162 104 248V264C104 272.836 111.164 280 120 280H136C144.836 280 152 272.836 152 264V248C152 239.162 144.836 232 136 232ZM232 328H216C207.164 328 200 335.162 200 344V360C200 368.836 207.164 376 216 376H232C240.836 376 248 368.836 248 360V344C248 335.162 240.836 328 232 328ZM232 232H216C207.164 232 200 239.162 200 248V264C200 272.836 207.164 280 216 280H232C240.836 280 248 272.836 248 264V248C248 239.162 240.836 232 232 232ZM328 232H312C303.164 232 296 239.162 296 248V264C296 272.836 303.164 280 312 280H328C336.836 280 344 272.836 344 264V248C344 239.162 336.836 232 328 232ZM232 136H216C207.164 136 200 143.162 200 152V168C200 176.836 207.164 184 216 184H232C240.836 184 248 176.836 248 168V152C248 143.162 240.836 136 232 136ZM384 32H64C28.801 32 0 60.799 0 96V416C0 451.199 28.801 480 64 480H384C419.199 480 448 451.199 448 416V96C448 60.799 419.199 32 384 32ZM400 416C400 424.836 392.836 432 384 432H64C55.164 432 48 424.836 48 416V96C48 87.162 55.164 80 64 80H384C392.836 80 400 87.162 400 96V416Z" })
  }
));
BorderOuterRegular.displayName = "BorderOuterRegular";
var BorderOuter_default = BorderOuterRegular;
