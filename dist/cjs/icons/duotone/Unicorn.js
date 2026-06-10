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
var Unicorn_exports = {};
__export(Unicorn_exports, {
  default: () => Unicorn_default
});
module.exports = __toCommonJS(Unicorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UnicornDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 248V304C0 312.836 7.164 320 16 320H32.002C40.838 320 48.002 312.836 48.002 304V248C47.984 234.807 54.48 222.457 65.363 215C67.26 194.562 75.686 175.277 89.395 160H88.004C39.4 160 0 199.398 0 248ZM638.652 35.555C638.652 35.553 638.65 35.551 638.65 35.549C637.17 33.34 634.689 32.01 632.029 32H531.895C528.83 35.188 525.377 37.977 521.615 40.299C526.725 45.68 531.525 50.799 535.305 54.799C540.844 60.705 543.916 68.504 543.896 76.6V83.359L636.439 46.65C640.115 44.197 641.105 39.229 638.652 35.555Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M543.939 76.6C543.961 68.504 540.881 60.705 535.332 54.799C531.543 50.799 526.734 45.68 521.613 40.299C532.695 33.459 541.154 22.809 543.84 9.639C544.701 5.262 541.844 1.014 537.455 0.152C537.449 0.152 537.443 0.15 537.436 0.15C536.928 0.051 536.41 0 535.893 0H415.641C344.799 0 287.371 57.307 287.371 128H160.193C107.062 128.004 63.996 170.988 64 224.008C64.002 250.584 75.043 275.969 94.496 294.119L72.758 352H72.799L68.738 362.871C64.242 374.912 63.506 388.031 66.627 400.5L88.473 487.77C92.037 502.012 104.836 512 119.516 512H152.502C173.312 512 188.588 492.447 183.551 472.256L162.256 386.875L175.273 352H175.469L186.248 323.27L288.135 345.625V480C288.135 497.672 302.461 512 320.135 512H352.139C369.738 512 384.139 497.6 384.139 480V318.25C403.764 298 416.139 270.5 416.139 240C416.139 239.75 416.014 239.625 416.014 239.375V137.016L431.693 144L450.635 181.699C458.102 196.564 475.736 203.244 491.209 197.07L523.828 184.07C536.025 179.207 544.018 167.416 544 154.309L543.939 76.6ZM479.795 96C470.939 96 463.762 88.836 463.762 80C463.762 71.162 470.939 64 479.795 64S495.828 71.162 495.828 80C495.828 88.836 488.65 96 479.795 96Z" })
    ]
  }
));
UnicornDuotone.displayName = "UnicornDuotone";
var Unicorn_default = UnicornDuotone;
