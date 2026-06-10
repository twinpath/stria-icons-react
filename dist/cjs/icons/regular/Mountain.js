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
var Mountain_exports = {};
__export(Mountain_exports, {
  default: () => Mountain_default
});
module.exports = __toCommonJS(Mountain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MountainRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.193 393.783L280.074 44.246C274.865 36.082 265.433 32 256 32C246.568 32 237.136 36.082 231.927 44.246L8.806 393.783C-2.307 411.193 -2.946 433.207 7.14 451.234C17.072 468.973 35.921 480 56.314 480H455.685C476.078 480 494.929 468.973 504.861 451.234C514.945 433.193 514.306 411.18 503.193 393.783ZM256 95.742L327.658 208H256C248.453 208 241.328 211.562 236.796 217.594L208 256L178.668 216.891L256 95.742ZM462.98 427.783C461.544 430.346 458.681 432 455.685 432H56.314C53.318 432 50.457 430.346 49.031 427.799C47.57 425.189 47.658 422.127 49.265 419.609L151.076 260.113L188.796 310.406C193.328 316.438 200.453 320 208 320S222.671 316.438 227.203 310.406L268 256H358.296L462.742 419.623C464.345 422.133 464.427 425.193 462.98 427.783Z" })
  }
));
MountainRegular.displayName = "MountainRegular";
var Mountain_default = MountainRegular;
