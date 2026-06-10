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
var Walker_exports = {};
__export(Walker_exports, {
  default: () => Walker_default
});
module.exports = __toCommonJS(Walker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WalkerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M407.911 388.655V87.979C407.911 39.389 368.449 0 319.77 0H185.556C145.116 0 109.81 27.493 100.044 66.609L0.655 482.374C-2.383 495.141 5.432 507.972 18.185 511.153C31.153 514.39 44.272 506.427 47.36 493.446L100.545 271.934H359.834V388.655C331.414 400.152 315.138 430.145 320.897 460.138C326.781 490.255 353.198 512 383.872 512S440.964 490.255 446.848 460.138C452.607 430.145 436.331 400.152 407.911 388.655ZM359.834 223.945H111.938L146.619 78.231C151.126 60.485 167.151 47.988 185.556 47.988H319.77C341.93 47.988 359.834 65.859 359.834 87.979V223.945ZM383.872 463.887C374.983 463.887 367.847 456.763 367.847 447.891S374.983 431.895 383.872 431.895S399.898 439.018 399.898 447.891S392.762 463.887 383.872 463.887Z" })
  }
));
WalkerRegular.displayName = "WalkerRegular";
var Walker_default = WalkerRegular;
