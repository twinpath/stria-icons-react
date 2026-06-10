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
var Acorn_exports = {};
__export(Acorn_exports, {
  default: () => Acorn_default
});
module.exports = __toCommonJS(Acorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AcornDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 192.001V224.001C400 397.875 271.047 457.133 224 480C176.953 457.133 48 397.875 48 224.001V192.001H400Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 160.032C0 160.026 0.002 160.018 0.002 160.012C0.002 160.009 0 160.007 0 160.003V160.032ZM352 64.039H251.5C254.875 54.666 260 45.916 266.625 38.041C272.25 31.543 272 22.043 266 16.168L254.75 4.795C251.625 1.67 247 -0.33 242.75 0.045C238.375 0.295 234.25 2.17 231.375 5.42C216.625 22.168 206.875 42.416 202 64.039H96C43.006 64.039 0.014 107.022 0.002 160.012C0.006 177.63 14.379 192.001 32 192.001H416C433.621 192.001 447.994 177.63 447.998 160.012C447.986 107.022 404.994 64.039 352 64.039ZM447.998 160.012C447.998 160.018 448 160.026 448 160.032V160.003C448 160.007 447.998 160.009 447.998 160.012Z" })
    ]
  }
));
AcornDuotone.displayName = "AcornDuotone";
var Acorn_default = AcornDuotone;
