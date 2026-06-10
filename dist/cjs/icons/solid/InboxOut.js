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
var InboxOut_exports = {};
__export(InboxOut_exports, {
  default: () => InboxOut_default
});
module.exports = __toCommonJS(InboxOut_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxOutSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 320H384L352 384H160L128 320H32C14.326 320 0 334.328 0 352V464C0 490.508 21.49 512 48 512H464C490.508 512 512 490.508 512 464V352C512 334.328 497.672 320 480 320ZM182.625 150.625L224 109.25V288C224 305.688 238.312 320 256 320S288 305.688 288 288V109.25L329.375 150.625C335.625 156.875 343.812 160 352 160S368.375 156.875 374.625 150.625C387.125 138.125 387.125 117.875 374.625 105.375L278.625 9.375C266.125 -3.125 245.875 -3.125 233.375 9.375L137.375 105.375C124.875 117.875 124.875 138.125 137.375 150.625S170.125 163.125 182.625 150.625Z" })
  }
));
InboxOutSolid.displayName = "InboxOutSolid";
var InboxOut_default = InboxOutSolid;
