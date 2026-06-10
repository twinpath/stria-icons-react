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
var KiwiBird_exports = {};
__export(KiwiBird_exports, {
  default: () => KiwiBird_default
});
module.exports = __toCommonJS(KiwiBird_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KiwiBirdSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.73 218.019C572.605 157.399 518.232 112.027 457.609 112.027H448.234C395.486 112.027 343.988 95.779 300.49 65.781C258.491 36.783 204.493 24.159 147.245 37.033C129.246 41.158 -0.125 78.28 0 224.019C0 295.014 38.624 356.759 95.997 390.007V464.001C95.997 472.876 103.121 480 111.996 480H127.996C136.87 480 143.995 472.876 143.995 464.001V409.755C159.37 413.755 175.369 416.005 191.993 416.005C197.368 416.005 202.618 415.255 207.993 414.88V464.001C207.993 472.876 215.118 480 223.992 480H239.992C248.866 480 255.991 472.876 255.991 464.001V404.631C270.241 399.506 283.865 393.131 296.365 385.007C342.113 355.259 393.861 336.011 448.484 336.011C473.984 336.011 464.484 335.761 471.484 335.261L545.856 471.626C548.731 476.875 554.231 480 559.981 480C561.231 480 562.605 479.875 563.855 479.5C570.98 477.75 575.98 471.251 575.98 464.001C575.98 464.001 576.105 223.769 575.73 218.019ZM463.984 248.017C450.734 248.017 439.985 237.268 439.985 224.019C439.985 210.77 450.734 200.021 463.984 200.021S487.983 210.77 487.983 224.019C487.983 237.268 477.233 248.017 463.984 248.017ZM543.981 401.256L504.107 328.136C519.232 322.387 532.857 313.637 543.981 302.263V401.256Z" })
  }
));
KiwiBirdSolid.displayName = "KiwiBirdSolid";
var KiwiBird_default = KiwiBirdSolid;
