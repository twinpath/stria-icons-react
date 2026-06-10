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
var BriefcaseMedical_exports = {};
__export(BriefcaseMedical_exports, {
  default: () => BriefcaseMedical_default
});
module.exports = __toCommonJS(BriefcaseMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BriefcaseMedicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 314C368 322.836 360.836 330 352 330H298V384C298 392.836 290.836 400 282 400H230C221.164 400 214 392.836 214 384V330H160C151.164 330 144 322.836 144 314V262C144 253.162 151.164 246 160 246H214V192C214 183.162 221.164 176 230 176H282C290.836 176 298 183.162 298 192V246H352C360.836 246 368 253.162 368 262V314Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H384V48C384 21.5 362.5 0 336 0H176C149.5 0 128 21.5 128 48V96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM176 48H336V96H176V48ZM368 314C368 322.836 360.836 330 352 330H298V384C298 392.836 290.836 400 282 400H230C221.164 400 214 392.836 214 384V330H160C151.164 330 144 322.836 144 314V262C144 253.162 151.164 246 160 246H214V192C214 183.162 221.164 176 230 176H282C290.836 176 298 183.162 298 192V246H352C360.836 246 368 253.162 368 262V314Z" })
    ]
  }
));
BriefcaseMedicalDuotone.displayName = "BriefcaseMedicalDuotone";
var BriefcaseMedical_default = BriefcaseMedicalDuotone;
