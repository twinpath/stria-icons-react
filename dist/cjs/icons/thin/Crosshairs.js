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
var Crosshairs_exports = {};
__export(Crosshairs_exports, {
  default: () => Crosshairs_default
});
module.exports = __toCommonJS(Crosshairs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrosshairsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 248H455.594C451.457 144.115 367.885 60.543 264 56.406V8C264 3.578 260.422 0 256 0S248 3.578 248 8V56.406C144.115 60.543 60.543 144.115 56.406 248H8C3.578 248 0 251.578 0 256S3.578 264 8 264H56.406C60.543 367.885 144.115 451.457 248 455.594V504C248 508.422 251.578 512 256 512S264 508.422 264 504V455.594C367.885 451.457 451.457 367.885 455.594 264H504C508.422 264 512 260.422 512 256S508.422 248 504 248ZM360 264H439.596C435.477 359.057 359.057 435.477 264 439.596V360C264 355.578 260.422 352 256 352S248 355.578 248 360V439.596C152.943 435.477 76.523 359.057 72.404 264H152C156.422 264 160 260.422 160 256S156.422 248 152 248H72.404C76.523 152.943 152.943 76.523 248 72.404V152C248 156.422 251.578 160 256 160S264 156.422 264 152V72.404C359.057 76.523 435.477 152.943 439.596 248H360C355.578 248 352 251.578 352 256S355.578 264 360 264ZM256 216C233.938 216 216 233.938 216 256S233.938 296 256 296S296 278.062 296 256S278.063 216 256 216ZM256 280C242.766 280 232 269.234 232 256S242.766 232 256 232S280 242.766 280 256S269.234 280 256 280Z" })
  }
));
CrosshairsThin.displayName = "CrosshairsThin";
var Crosshairs_default = CrosshairsThin;
