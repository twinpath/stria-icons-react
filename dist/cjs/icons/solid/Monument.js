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
var Monument_exports = {};
__export(Monument_exports, {
  default: () => Monument_default
});
module.exports = __toCommonJS(Monument_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MonumentSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M289.125 100.699C288.375 93.324 285.125 86.447 279.875 81.197L203.25 4.688C197 -1.562 186.875 -1.562 180.625 4.688L104.125 81.197C98.875 86.447 95.625 93.324 94.875 100.699L64 415.988H320L289.125 100.699ZM240 307.225C240 313.602 233.625 319.977 227.25 319.977H156.75C150.375 319.977 144 313.602 144 307.225V268.721C144 262.344 150.375 255.969 156.75 255.969H227.25C233.625 255.969 240 262.344 240 268.721V307.225ZM368 447.992H16C7.125 447.992 0 455.117 0 463.994V495.998C0 504.875 7.125 512 16 512H368C376.875 512 384 504.875 384 495.998V463.994C384 455.117 376.875 447.992 368 447.992Z" })
  }
));
MonumentSolid.displayName = "MonumentSolid";
var Monument_default = MonumentSolid;
