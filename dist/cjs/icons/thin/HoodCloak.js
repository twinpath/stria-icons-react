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
var HoodCloak_exports = {};
__export(HoodCloak_exports, {
  default: () => HoodCloak_default
});
module.exports = __toCommonJS(HoodCloak_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HoodCloakThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M569.62 460.875C511.996 383.875 511.996 320 511.996 320V256C511.996 172 465.622 133 410.873 73.25L450.622 33.5C462.997 21.125 454.247 0 436.747 0H287.625C192.002 0 64.004 109.5 64.004 256V320C64.004 320 64.004 383.875 6.38 460.875C1.88 466.75 -0.119 473.5 0.006 480C0.256 496.5 13.505 512 32.38 512H543.62C562.495 512 575.745 496.5 575.995 480C576.12 473.5 574.12 466.75 569.62 460.875ZM168.008 496V320C168.008 253.844 221.851 200 288.006 200S408.004 253.844 408.004 320V496H168.008ZM543.62 496H424.003V320C424.003 245 363.004 184 288.006 184S152.008 245 152.008 320V496H32.38C22.417 496 16.122 487.57 16.003 479.691C15.958 477.437 16.458 474.031 19.191 470.461C79.313 390.121 80.004 322.824 80.004 320V256C80.004 116.777 204.019 16 287.625 16H436.747C438.362 16 439.491 16.75 440.106 18.23C440.72 19.715 440.45 21.043 439.308 22.187L399.558 61.937L388.729 72.766L399.076 84.058C405.199 90.742 411.218 97.168 417.082 103.426C462.895 152.324 495.996 187.656 495.996 256V320C495.996 322.824 496.687 390.121 556.919 470.605C559.542 474.031 560.042 477.437 559.997 479.758C559.878 487.57 553.583 496 543.62 496Z" })
  }
));
HoodCloakThin.displayName = "HoodCloakThin";
var HoodCloak_default = HoodCloakThin;
