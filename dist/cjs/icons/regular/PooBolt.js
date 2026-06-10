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
var PooBolt_exports = {};
__export(PooBolt_exports, {
  default: () => PooBolt_default
});
module.exports = __toCommonJS(PooBolt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PooBoltRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 192.375V192C400 153.75 377.5 120.75 345.125 105.25C337.75 46 287.25 0 226 0C218.25 0 211.25 1.125 207.25 1.75C190.75 4.25 176.75 15.25 170.375 30.625S166 63.625 175.75 77.125C177.25 79.25 178 81.625 178 84C178 90.625 172.625 96 166 96H144C91.125 96 48 139.125 48 192V192.375C19.25 210.875 0 243.25 0 280C0 332.863 39.582 376.035 90.645 382.654C85.424 366.119 89.535 348.27 101.125 335.709C71.607 334.178 48 309.895 48 280C48 249.125 73.125 224 104 224H108.5C100.75 215.5 96 204.25 96 192C96 165.5 117.5 144 144 144H166C199.125 144 226 117.125 226 84C226 71 221.75 59 214.75 49.125C218.375 48.5 222.25 48 226 48C265.75 48 298 80.25 298 120C298 128.5 296.25 136.5 293.625 144H304C330.5 144 352 165.5 352 192C352 204.25 347.25 215.5 339.5 224H344C374.875 224 400 249.125 400 280C400 309.836 376.488 334.072 347.049 335.691C351.023 340.012 354.502 344.832 356.75 350.562C360.795 361.115 360.52 372.373 357.197 382.67C408.334 376.121 448 332.916 448 280C448 243.25 428.75 210.875 400 192.375ZM312 352H247.906L291.594 246.094C294.469 239.188 292.125 231.219 286 226.906C279.875 222.656 271.656 223.125 266.062 228.156L125.25 356.156C120.344 360.594 118.688 367.594 121.062 373.781C123.469 379.938 129.375 384 136 384H200.094L156.406 489.906C153.531 496.812 155.875 504.781 162 509.094C164.781 511.031 167.969 512 171.188 512C175.063 512 178.906 510.594 181.938 507.844L322.75 379.844C327.656 375.406 329.312 368.406 326.938 362.219C324.531 356.062 318.625 352 312 352Z" })
  }
));
PooBoltRegular.displayName = "PooBoltRegular";
var PooBolt_default = PooBoltRegular;
