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
var Split_exports = {};
__export(Split_exports, {
  default: () => Split_default
});
module.exports = __toCommonJS(Split_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SplitSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.959 382.953C514.346 392.34 514.346 407.559 504.959 416.945L424.959 496.922C409.83 512.043 383.969 501.328 383.969 479.938V440H320C308.562 440 297.688 435.125 290.094 426.562L174.039 296H40C17.908 296 0 278.094 0 256S17.908 216 40 216H174.039L290.094 85.438C297.688 76.875 308.562 72 320 72H383.969V32.062C383.969 10.672 409.83 -0.047 424.959 15.078L504.959 95.055C514.346 104.438 514.346 119.656 504.959 129.047L424.965 209.016C409.834 224.141 383.969 213.422 383.969 192.031V152H337.969L245.52 256L337.969 360H383.969V319.969C383.969 298.574 409.834 287.859 424.965 302.984L504.959 382.953Z" })
  }
));
SplitSolid.displayName = "SplitSolid";
var Split_default = SplitSolid;
