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
var XmarkToSlot_exports = {};
__export(XmarkToSlot_exports, {
  default: () => XmarkToSlot_default
});
module.exports = __toCommonJS(XmarkToSlot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const XmarkToSlotSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 80C480 53.492 458.51 32 432 32H144C117.49 32 96 53.492 96 80V384H480V80ZM368.969 255.031C378.344 264.406 378.344 279.594 368.969 288.969C359.588 298.348 344.404 298.34 335.031 288.969L288 241.938L240.969 288.969C231.588 298.348 216.404 298.34 207.031 288.969C197.656 279.594 197.656 264.406 207.031 255.031L254.062 208L207.031 160.969C197.656 151.594 197.656 136.406 207.031 127.031S231.594 117.656 240.969 127.031L288 174.062L335.031 127.031C344.406 117.656 359.594 117.656 368.969 127.031S378.344 151.594 368.969 160.969L321.938 208L368.969 255.031ZM528 288H512V400C512 408.836 504.836 416 496 416H80C71.164 416 64 408.836 64 400V288H48C21.492 288 0 309.492 0 336V432C0 458.508 21.492 480 48 480H528C554.508 480 576 458.508 576 432V336C576 309.492 554.508 288 528 288Z" })
  }
));
XmarkToSlotSolid.displayName = "XmarkToSlotSolid";
var XmarkToSlot_default = XmarkToSlotSolid;
