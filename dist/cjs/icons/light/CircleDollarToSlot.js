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
var CircleDollarToSlot_exports = {};
__export(CircleDollarToSlot_exports, {
  default: () => CircleDollarToSlot_default
});
module.exports = __toCommonJS(CircleDollarToSlot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDollarToSlotLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M243.988 270.797C236.178 269.68 230.557 268.098 205.082 259.516C196.77 256.641 187.676 261.203 184.832 269.562C182.02 277.938 186.52 287.016 194.895 289.844C224.238 299.812 231.469 301.289 239.988 302.516V320C239.988 328.844 247.145 336 255.988 336S271.988 328.844 271.988 320V303.201C301.709 299.691 322.576 283.906 327.02 259.484C335.457 213.016 290.113 200.688 260.113 192.516L252.863 190.531C218.801 180.984 214.238 174.375 216.457 162.234C219.457 145.594 244.488 141.719 267.926 145.188C274.488 146.156 282.457 148.234 292.988 151.703C301.363 154.469 310.457 149.891 313.176 141.5C315.957 133.109 311.395 124.062 302.988 121.297C290.676 117.25 280.395 114.727 271.988 113.477V96C271.988 87.156 264.832 80 255.988 80S239.988 87.156 239.988 96V112.803C210.242 116.316 189.404 132.092 184.957 156.516C176.613 202.391 222.301 215.188 244.238 221.344L251.707 223.391C289.926 233.797 298.113 239.469 295.52 253.766C292.52 270.406 267.551 274.375 243.988 270.797ZM464 352C455.156 352 448 359.156 448 368S455.156 384 464 384C472.812 384 480 391.172 480 400V464C480 472.828 472.812 480 464 480H48C39.188 480 32 472.828 32 464V400C32 391.172 39.188 384 48 384C56.844 384 64 376.844 64 368S56.844 352 48 352C21.531 352 0 373.531 0 400V464C0 490.469 21.531 512 48 512H464C490.469 512 512 490.469 512 464V400C512 373.531 490.469 352 464 352ZM256 416C370.875 416 464 322.875 464 208S370.875 0 256 0S48 93.125 48 208S141.125 416 256 416ZM256 32C353.047 32 432 110.953 432 208S353.047 384 256 384S80 305.047 80 208S158.953 32 256 32Z" })
  }
));
CircleDollarToSlotLight.displayName = "CircleDollarToSlotLight";
var CircleDollarToSlot_default = CircleDollarToSlotLight;
