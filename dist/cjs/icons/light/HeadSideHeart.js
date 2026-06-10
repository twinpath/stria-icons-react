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
var HeadSideHeart_exports = {};
__export(HeadSideHeart_exports, {
  default: () => HeadSideHeart_default
});
module.exports = __toCommonJS(HeadSideHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideHeartLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.223 275C488.223 227.875 460.727 123.25 436.104 88.25C397.606 33.625 334.487 0 266.117 0H199.998C95.506 0 4.139 80.125 0.139 184.5C-2.111 244.375 23.137 298.125 64.008 334.875L63.998 496C63.998 504.844 71.155 512 79.998 512C88.84 512 95.996 504.844 95.996 496C95.996 472.234 96.043 345.67 96.006 320.5L85.381 311C49.76 279 30.262 233.375 32.137 185.75C35.387 101 110.629 32 199.998 32H266.117C323.237 32 376.983 59.875 409.981 106.625C422.479 124.5 438.979 173.375 452.352 212.75C462.102 241.5 471.35 268.5 479.975 288H431.979C423.142 288 415.979 295.163 415.979 304V384C415.979 401.6 401.579 416 383.979 416H303.988C295.152 416 287.989 423.119 287.988 431.954C287.985 451.788 287.981 484.437 287.981 496C287.981 504.844 295.137 512 303.979 512C312.822 512 319.979 504.844 319.979 496C319.979 483.818 319.989 460.084 319.989 448H383.983C419.326 448 447.977 419.349 447.977 384.006V320H479.975C503.098 320 518.596 296.125 509.223 275ZM330.104 109.244C316.229 97.619 282.479 80.744 239.979 123.744C197.354 80.744 163.604 97.619 149.729 109.244C122.229 132.244 120.854 173.369 145.479 198.244L229.979 283.869C235.479 289.369 244.229 289.369 249.729 283.869L334.479 198.244C359.104 173.369 357.604 132.244 330.104 109.244ZM311.854 175.744L239.854 248.369L168.104 175.744C157.729 165.369 155.729 145.744 170.104 133.744C183.854 122.244 201.354 130.369 208.604 137.494L239.979 169.244L271.354 137.494C278.479 130.244 295.979 122.244 309.729 133.744C324.104 145.744 322.104 165.369 311.854 175.744Z" })
  }
));
HeadSideHeartLight.displayName = "HeadSideHeartLight";
var HeadSideHeart_default = HeadSideHeartLight;
