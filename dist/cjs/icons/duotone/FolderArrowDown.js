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
var FolderArrowDown_exports = {};
__export(FolderArrowDown_exports, {
  default: () => FolderArrowDown_default
});
module.exports = __toCommonJS(FolderArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderArrowDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM159.031 271.031C163.719 266.344 169.844 264 176 264S188.281 266.344 192.969 271.031L232 310.062V200C232 186.75 242.75 176 256 176S280 186.75 280 200V310.062L319.031 271.031C328.406 261.656 343.594 261.656 352.969 271.031S362.344 295.594 352.969 304.969L272.969 384.969C263.594 394.344 248.406 394.344 239.031 384.969L159.031 304.969C149.656 295.594 149.656 280.406 159.031 271.031Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.031 271.031C163.719 266.344 169.844 264 176 264S188.281 266.344 192.969 271.031L232 310.062V200C232 186.75 242.75 176 256 176S280 186.75 280 200V310.062L319.031 271.031C328.406 261.656 343.594 261.656 352.969 271.031S362.344 295.594 352.969 304.969L272.969 384.969C263.594 394.344 248.406 394.344 239.031 384.969L159.031 304.969C149.656 295.594 149.656 280.406 159.031 271.031Z" })
    ]
  }
));
FolderArrowDownDuotone.displayName = "FolderArrowDownDuotone";
var FolderArrowDown_default = FolderArrowDownDuotone;
