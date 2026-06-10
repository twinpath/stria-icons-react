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
var Mace_exports = {};
__export(Mace_exports, {
  default: () => Mace_default
});
module.exports = __toCommonJS(Mace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MaceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M500.123 210.004L419.369 184.43C405.775 139.48 370.244 104.488 325.021 91.836L297.699 11.625C292.451 -3.984 278.992 -3.852 274.011 11.895L248.439 92.645C203.486 106.238 168.494 141.77 155.841 187.125L75.626 214.312C60.013 219.559 60.148 233.016 75.894 237.996L156.648 263.57C160.093 274.961 164.972 285.699 171.039 295.613L9.359 457.258C-3.12 469.734 -3.12 490.152 9.359 502.633C21.855 515.125 42.117 515.125 54.609 502.621L216.33 340.836C227.021 347.406 238.595 352.695 250.996 356.164L278.318 436.375C283.568 451.984 297.027 451.852 302.005 436.105L327.578 355.355C372.531 341.762 407.525 306.23 420.175 261.012L500.257 233.688C516.003 228.441 515.869 214.984 500.123 210.004ZM288 256C270.375 256 256 241.625 256 224S270.375 192 288 192S320 206.375 320 224S305.625 256 288 256Z" })
  }
));
MaceSolid.displayName = "MaceSolid";
var Mace_default = MaceSolid;
