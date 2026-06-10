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
var Tombstone_exports = {};
__export(Tombstone_exports, {
  default: () => Tombstone_default
});
module.exports = __toCommonJS(Tombstone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TombstoneRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M295.971 159.992L247.971 159.998L247.967 119.998C247.965 106.742 237.219 95.998 223.965 96C210.709 96 199.965 106.746 199.967 120.002L199.971 160.002L151.971 160.006C138.715 160.008 127.971 170.754 127.973 184.008C127.973 197.264 138.719 208.008 151.975 208.006L199.975 208.002L199.986 328.002C199.986 341.256 210.732 352 223.988 352C237.242 351.998 247.986 341.252 247.986 327.998L247.975 207.998L295.975 207.992C309.229 207.992 319.973 197.246 319.973 183.99C319.971 170.736 309.225 159.992 295.971 159.992ZM424 464H416.016L415.994 191.973C415.984 85.979 329.975 -0.01 223.977 0C117.975 0.01 31.984 86.014 31.994 192.008L32.016 464H24C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512H424C437.254 512 448 501.254 448 488C448 474.744 437.254 464 424 464ZM80.016 464L79.994 192.004C79.986 112.633 144.605 48.006 223.98 47.998S367.986 112.605 367.994 191.977L368.016 464H80.016Z" })
  }
));
TombstoneRegular.displayName = "TombstoneRegular";
var Tombstone_default = TombstoneRegular;
