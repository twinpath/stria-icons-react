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
var Screencast_exports = {};
__export(Screencast_exports, {
  default: () => Screencast_default
});
module.exports = __toCommonJS(Screencast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScreencastDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.461 32H80.912C36.836 32 1 67.824 1 111.891V177.84C11.502 176.605 22.131 175.797 32.965 175.797S54.428 176.605 64.93 177.84V111.891C64.93 103.086 72.109 95.91 80.912 95.91H496.461C505.266 95.91 512.445 103.086 512.445 111.891V399.484C512.445 408.289 505.266 415.465 496.461 415.465H302.629C303.861 425.965 304.67 436.594 304.67 447.422S303.861 468.875 302.629 479.375H496.461C540.539 479.375 576.375 443.551 576.375 399.484V111.891C576.375 67.824 540.539 32 496.461 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32.59 415.465C14.936 415.465 0.625 429.773 0.625 447.422S14.936 479.375 32.59 479.375S64.555 465.07 64.555 447.422S50.244 415.465 32.59 415.465ZM32.59 223.734C14.922 223.734 0.625 238.023 0.625 255.688S14.922 287.641 32.59 287.641C120.713 287.641 192.416 359.324 192.416 447.422C192.416 465.082 206.713 479.375 224.381 479.375C242.051 479.375 256.348 465.082 256.348 447.422C256.348 324.094 155.955 223.734 32.59 223.734ZM31.965 320.223C14.297 320.223 0 334.516 0 352.18C0 369.84 14.297 384.133 31.965 384.133C67.209 384.133 95.896 412.812 95.896 448.047C95.896 465.707 110.193 480 127.861 480S159.826 465.707 159.826 448.047C159.826 377.547 102.482 320.223 31.965 320.223Z" })
    ]
  }
));
ScreencastDuotone.displayName = "ScreencastDuotone";
var Screencast_default = ScreencastDuotone;
