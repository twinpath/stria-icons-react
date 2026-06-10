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
var Steak_exports = {};
__export(Steak_exports, {
  default: () => Steak_default
});
module.exports = __toCommonJS(Steak_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SteakSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368.883 96C341.508 96 317.008 119.75 306.258 156.375C300.008 177.75 279.508 262.625 133.133 326.375C-5.742 386.75 297.008 495.75 454.383 316.5C492.508 273 487.133 190.5 442.758 140C417.883 111.625 391.633 96 368.883 96ZM384.008 255.875C366.383 255.875 352.008 241.625 352.008 223.875C352.008 206.25 366.383 191.875 384.008 191.875S416.008 206.25 416.008 223.875C416.008 241.625 401.633 255.875 384.008 255.875ZM514.883 76.625C467.883 23.125 416.258 0 368.883 0C298.258 0 237.008 51.125 214.133 129.375C165.008 269.25 1.383 212.375 0.008 351.625C-1.242 473.25 139.258 516.25 256.008 511.625C343.758 508.25 443.383 474.5 526.508 379.75C596.758 299.75 591.633 164 514.883 76.625ZM478.383 337.625C402.258 424.375 314.133 445.375 253.633 447.75C215.883 449.125 122.008 441.25 82.383 401.125C79.883 398.625 22.883 339.375 120.383 297C192.008 265.75 252.633 225.75 275.508 147.375C290.383 96.75 327.008 64 368.883 64C401.383 64 435.258 83 466.883 118.875C522.008 181.75 527.258 281.875 478.383 337.625Z" })
  }
));
SteakSolid.displayName = "SteakSolid";
var Steak_default = SteakSolid;
