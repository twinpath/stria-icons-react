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
var DumpsterFire_exports = {};
__export(DumpsterFire_exports, {
  default: () => DumpsterFire_default
});
module.exports = __toCommonJS(DumpsterFire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DumpsterFireRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M418.832 104.23L418.957 103.98L404.579 32H304.059V159.964H364.821C381.074 140.72 399.078 121.85 418.832 104.23ZM461.34 104.23C479.593 120.475 496.847 137.845 512.475 155.715C518.226 150.093 523.852 144.594 529.853 139.345L551.107 120.35L572.362 139.345C573.487 140.345 574.487 141.469 575.487 142.469C575.362 141.719 575.737 140.97 575.487 140.22L551.482 44.247C549.857 37.124 543.356 32.125 536.104 32.125H437.21L449.463 93.608L461.34 104.23ZM272.053 32.125H171.533L145.903 160.089H272.053V32.125ZM106.396 400.022L86.392 240.067H311.811C319.687 224.321 329.314 208.201 340.691 192.08H32.006L36.007 224.071H24.005C10.802 224.071 0 234.868 0 248.065V248.065C0 261.261 10.802 272.058 24.005 272.058H42.008L64.012 448.009V456.007C64.012 469.203 74.815 480 88.017 480H88.017C101.22 480 112.022 469.203 112.022 456.007V448.009H336.816C324.063 433.763 313.311 417.642 305.309 400.022H106.396ZM16.003 160.089H113.272L138.902 32.125H40.008C32.756 32.125 26.255 37.124 24.505 44.247L0.5 140.22C-2 150.342 5.626 160.089 16.003 160.089ZM551.232 163.338C536.354 176.585 522.852 190.456 510.975 204.452C491.471 178.709 467.341 152.466 439.961 128.098C369.822 190.831 319.937 272.308 319.937 321.669C319.937 409.145 391.576 480 479.969 480S640 409.145 640 321.669C640.125 285.054 602.992 209.45 551.232 163.338ZM480.094 432.013C418.331 432.013 368.072 382.527 368.072 321.669C368.072 299.05 392.952 246.94 440.336 195.329C462.715 218.948 470.842 230.945 508.849 281.305C549.357 233.569 547.857 235.318 549.857 232.944C576.362 268.309 592.115 306.923 592.115 321.794C592.115 382.527 541.856 432.013 480.094 432.013Z" })
  }
));
DumpsterFireRegular.displayName = "DumpsterFireRegular";
var DumpsterFire_default = DumpsterFireRegular;
