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
var Jug_exports = {};
__export(Jug_exports, {
  default: () => Jug_default
});
module.exports = __toCommonJS(Jug_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JugDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 63.92H144C135.163 63.92 128 56.757 128 47.92V16C128 7.163 135.163 0 144 0H304C312.837 0 320 7.163 320 16V47.92C320 56.757 312.837 63.92 304 63.92ZM416 287.96H32V415.983H416V287.96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 415.983H416V447.989C416 483.339 387.346 512 352 512H96C60.654 512 32 483.339 32 447.989V415.983ZM404.875 233.825C412.125 249.953 415.875 270.457 416 287.96H32.01C32.037 258.849 41.945 227.512 60.125 204.789L136.984 108.733C141.525 103.06 144 96.004 144 88.737V63.92H304V88.971C304 96.395 306.58 103.591 311.301 109.323L321.375 121.555C340.75 98.426 372.5 89.925 400.875 100.301C429.25 110.678 448.125 137.683 448 167.939C448 196.569 431.125 222.323 404.875 233.825ZM399.875 167.188C399.5 154.186 388.875 143.934 376 143.934C365 143.934 356.125 151.436 353.25 161.562L377.375 191.693C390.25 190.943 400.25 180.066 399.875 167.188Z" })
    ]
  }
));
JugDuotone.displayName = "JugDuotone";
var Jug_default = JugDuotone;
