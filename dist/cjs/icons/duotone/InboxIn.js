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
var InboxIn_exports = {};
__export(InboxIn_exports, {
  default: () => InboxIn_default
});
module.exports = __toCommonJS(InboxIn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxInDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 320H384L352 384H160L128 320H32C14.326 320 0 334.328 0 352V464C0 490.508 21.49 512 48 512H464C490.51 512 512 490.508 512 464V352C512 334.328 497.674 320 480 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.625 169.375C387.125 181.875 387.125 202.125 374.625 214.625L278.625 310.625C266.125 323.125 245.875 323.125 233.375 310.625L137.375 214.625C124.875 202.125 124.875 181.875 137.375 169.375C143.625 163.125 151.813 160 160 160S176.375 163.125 182.625 169.375L224 210.75V32C224 14.312 238.313 0 256 0S288 14.312 288 32V210.75L329.375 169.375C341.875 156.875 362.125 156.875 374.625 169.375Z" })
    ]
  }
));
InboxInDuotone.displayName = "InboxInDuotone";
var InboxIn_default = InboxInDuotone;
