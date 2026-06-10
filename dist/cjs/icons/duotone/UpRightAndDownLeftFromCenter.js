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
var UpRightAndDownLeftFromCenter_exports = {};
__export(UpRightAndDownLeftFromCenter_exports, {
  default: () => UpRightAndDownLeftFromCenter_default
});
module.exports = __toCommonJS(UpRightAndDownLeftFromCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpRightAndDownLeftFromCenterDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.01 281.374C195.514 268.876 175.25 268.874 162.752 281.372L84.688 359.439L54.626 329.377C48.501 323.252 40.313 320.002 32 320.002C27.875 320.002 23.719 320.799 19.75 322.44C7.781 327.393 0 339.064 0 352.002V488C0 501.254 10.744 512 24 512H160.002C172.939 512 184.627 504.203 189.565 492.25C194.533 480.282 191.783 466.532 182.627 457.376L152.564 427.313L230.628 349.246C243.124 336.752 243.124 316.492 230.63 303.997L208.01 281.374Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 0H351.998C339.06 0 327.373 7.797 322.435 19.75C317.466 31.718 320.216 45.468 329.373 54.624L359.436 84.687L281.372 162.752C268.876 175.248 268.876 195.509 281.372 208.007L303.99 230.626C316.488 243.124 336.75 243.124 349.248 230.626L427.311 152.561L457.374 182.623C466.531 191.763 480.249 194.467 492.25 189.56C504.218 184.607 512 172.936 512 159.998V24C512 10.744 501.254 0 488 0Z" })
    ]
  }
));
UpRightAndDownLeftFromCenterDuotone.displayName = "UpRightAndDownLeftFromCenterDuotone";
var UpRightAndDownLeftFromCenter_default = UpRightAndDownLeftFromCenterDuotone;
