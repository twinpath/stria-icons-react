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
var Bone_exports = {};
__export(Bone_exports, {
  default: () => Bone_default
});
module.exports = __toCommonJS(Bone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoneSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M534.875 267.5C560.125 280 576 305.75 576 334V338.387C576 373.936 552.506 406.74 517.76 414.262C479.578 422.525 442.803 400.535 431 365.125C430.965 365.021 430.932 364.918 430.896 364.812C425.273 347.732 409.572 336 391.59 336H184.414C166.523 336 150.785 347.566 145.188 364.559C145.125 364.748 145.063 364.936 145 365.125C133.197 400.535 96.422 422.525 58.24 414.262C23.494 406.74 0 373.936 0 338.387V334C0 305.75 15.875 280 41.125 267.5C50.5 262.75 50.5 249.25 41.125 244.5C15.875 232 0 206.25 0 178V173.613C0 138.064 23.494 105.26 58.24 97.738C96.422 89.475 133.197 111.465 145 146.875L145.094 147.162C150.723 164.252 166.416 176 184.41 176H391.586C409.477 176 425.213 164.434 430.813 147.443L431 146.875C442.803 111.465 479.578 89.475 517.76 97.738C552.506 105.26 576 138.064 576 173.613V178C576 206.25 560.125 232 534.875 244.5C525.5 249.25 525.5 262.75 534.875 267.5Z" })
  }
));
BoneSolid.displayName = "BoneSolid";
var Bone_default = BoneSolid;
