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
var HeadSideMedical_exports = {};
__export(HeadSideMedical_exports, {
  default: () => HeadSideMedical_default
});
module.exports = __toCommonJS(HeadSideMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideMedicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.256 275C488.256 227.875 460.756 123.25 436.131 88.25C397.13 32.875 333.754 0 266.128 0H192.002C86.001 0 0 86 0 192C0 246.5 23.25 298.5 64.001 334.875V512H320.004V448H384.005C419.38 448 448.006 419.375 448.006 384V320H480.006C490.881 320 500.881 314.5 506.756 305.375C512.757 296.375 513.632 284.875 509.256 275ZM336.004 218C336.004 226.836 328.84 234 320.004 234H266.003V288C266.003 296.836 258.839 304 250.003 304H198.002C189.166 304 182.002 296.836 182.002 288V234H128.002C119.166 234 112.001 226.836 112.001 218V166C112.001 157.164 119.166 150 128.002 150H182.002V96C182.002 87.164 189.166 80 198.002 80H250.003C258.839 80 266.003 87.164 266.003 96V150H320.004C328.84 150 336.004 157.164 336.004 166V218Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.003 218C336.003 226.836 328.839 234 320.003 234H266.002V288C266.002 296.836 258.838 304 250.001 304H198.001C189.165 304 182.001 296.836 182.001 288V234H128C119.164 234 112 226.836 112 218V166C112 157.164 119.164 150 128 150H182.001V96C182.001 87.164 189.165 80 198.001 80H250.001C258.838 80 266.002 87.164 266.002 96V150H320.003C328.839 150 336.003 157.164 336.003 166V218Z" })
    ]
  }
));
HeadSideMedicalDuotone.displayName = "HeadSideMedicalDuotone";
var HeadSideMedical_default = HeadSideMedicalDuotone;
