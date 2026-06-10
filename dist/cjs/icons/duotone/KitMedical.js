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
var KitMedical_exports = {};
__export(KitMedical_exports, {
  default: () => KitMedical_default
});
module.exports = __toCommonJS(KitMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KitMedicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 480H128V32H96V480ZM448 32V480H480V32H448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H480V480H512C547.348 480 576 451.344 576 416V96C576 60.656 547.348 32 512 32ZM0 96V416C0 451.344 28.652 480 64 480H96V32H64C28.652 32 0 60.656 0 96ZM128 480H448V32H128V480ZM176 230.001C176 221.164 183.164 214.001 192 214.001H245.999V160C245.999 151.164 253.164 144 261.999 144H313.999C322.836 144 329.999 151.164 329.999 160V214.001H384C392.836 214.001 400 221.164 400 230.001V282.001C400 290.836 392.836 298.001 384 298.001H329.999V352C329.999 360.836 322.836 368 313.999 368H261.999C253.164 368 245.999 360.836 245.999 352V298.001H192C183.164 298.001 176 290.836 176 282.001V230.001Z" })
    ]
  }
));
KitMedicalDuotone.displayName = "KitMedicalDuotone";
var KitMedical_default = KitMedicalDuotone;
