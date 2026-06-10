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
var Kerning_exports = {};
__export(Kerning_exports, {
  default: () => Kerning_default
});
module.exports = __toCommonJS(Kerning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KerningThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M639.157 404.429L487.156 100.404C484.438 94.966 475.563 94.966 472.844 100.404L320.844 404.429C318.875 408.366 320.469 413.179 324.422 415.148C328.406 417.117 333.188 415.523 335.156 411.554L372.938 335.986H587.063L624.844 411.554C626.25 414.367 629.078 415.992 632 415.992C633.204 415.992 634.422 415.711 635.579 415.148C639.532 413.179 641.125 408.366 639.157 404.429ZM380.938 319.984L480 121.843L579.063 319.984H380.938ZM315.578 96.81C311.641 94.935 306.844 96.435 304.844 100.404L160 390.115L15.156 100.404C13.171 96.435 8.39 94.903 4.421 96.81C0.468 98.779 -1.125 103.592 0.843 107.529L152.844 411.554C154.203 414.273 156.969 415.992 160 415.992C163.031 415.992 165.797 414.273 167.156 411.554L319.156 107.529C321.125 103.592 319.531 98.779 315.578 96.81ZM447.578 0.802C443.641 -1.073 438.844 0.427 436.844 4.396L188.844 500.436C186.875 504.374 188.469 509.187 192.422 511.156C193.578 511.719 194.797 512 196 512C198.922 512 201.75 510.375 203.156 507.562L451.156 11.522C453.125 7.584 451.531 2.771 447.578 0.802Z" })
  }
));
KerningThin.displayName = "KerningThin";
var Kerning_default = KerningThin;
