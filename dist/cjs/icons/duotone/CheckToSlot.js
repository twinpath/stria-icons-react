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
var CheckToSlot_exports = {};
__export(CheckToSlot_exports, {
  default: () => CheckToSlot_default
});
module.exports = __toCommonJS(CheckToSlot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheckToSlotDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 32H144C117.49 32 96 53.492 96 80V400H480V80C480 53.492 458.51 32 432 32ZM378.875 166.812L290.875 278.812C286.844 283.969 280.875 287.25 274.344 287.875C273.562 287.969 272.781 288 272 288C266.281 288 260.75 285.969 256.375 282.219L200.375 234.219C190.312 225.594 189.156 210.438 197.781 200.375C206.438 190.313 221.594 189.188 231.625 197.781L268.594 229.469L341.125 137.188C349.313 126.781 364.438 124.969 374.813 133.125C385.25 141.312 387.062 156.406 378.875 166.812Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 288H480V368H496C504.836 368 512 375.164 512 384S504.836 400 496 400H80C71.164 400 64 392.836 64 384S71.164 368 80 368H96V288H48C21.492 288 0 309.492 0 336V432C0 458.508 21.492 480 48 480H528C554.508 480 576 458.508 576 432V336C576 309.492 554.508 288 528 288ZM256.375 282.219C260.75 285.969 266.281 288 272 288C272.781 288 273.562 287.969 274.344 287.875C280.875 287.25 286.844 283.969 290.875 278.813L378.875 166.813C387.063 156.406 385.25 141.313 374.813 133.125C364.438 124.969 349.313 126.781 341.125 137.188L268.594 229.469L231.625 197.781C221.594 189.188 206.438 190.312 197.781 200.375C189.156 210.438 190.312 225.594 200.375 234.219L256.375 282.219Z" })
    ]
  }
));
CheckToSlotDuotone.displayName = "CheckToSlotDuotone";
var CheckToSlot_default = CheckToSlotDuotone;
