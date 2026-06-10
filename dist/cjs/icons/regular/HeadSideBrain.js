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
var HeadSideBrain_exports = {};
__export(HeadSideBrain_exports, {
  default: () => HeadSideBrain_default
});
module.exports = __toCommonJS(HeadSideBrain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideBrainRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M313.631 192C334.756 192 352.006 175.5 352.006 155.25C352.006 134.875 334.756 118.375 313.631 118.375H311.006C305.756 103.125 291.381 92.875 275.256 92.75C268.131 92.75 261.881 95.25 256.131 98.625C249.381 87.625 237.756 80 224.006 80S198.631 87.625 191.881 98.625C186.131 95.25 179.881 92.75 172.756 92.75C151.631 92.75 134.381 110 134.381 131.25C113.256 131.25 96.006 148.375 96.006 169.625C96.006 186.5 107.006 200.375 122.131 205.5C122.006 206.375 121.631 207.125 121.631 208C121.631 229.25 138.756 246.375 160.006 246.375C164.381 246.25 168.756 245.375 172.756 243.875V294.375C172.756 308.527 184.229 320 198.381 320S224.006 308.527 224.006 294.375V243.875C228.131 245.375 232.381 246.25 236.756 246.375C258.006 246.375 275.256 229.25 275.256 208C275.131 202.5 273.881 197 271.506 192H313.631ZM509.223 275C488.223 227.875 460.727 123.25 436.104 88.25C397.606 33.625 334.487 0 266.117 0H199.998C95.506 0 4.139 80.125 0.139 184.5C-2.111 244.375 23.137 298.125 64.008 334.875V488C64.008 501.256 74.754 512 88.008 512C101.26 512 112.004 501.256 112.004 488.002V313.375L96.006 299.125C49.135 257 33.012 187.375 63.883 126.625C89.256 76.75 143.127 48 198.998 48H266.117C318.114 48 366.985 73.375 396.856 115.875C408.106 131.75 424.854 181.5 437.229 217.875C443.727 237.25 450.102 255.75 456.227 272H399.981V384C399.981 392.836 392.817 400 383.981 400H303.989V488C303.989 501.256 314.733 512 327.989 512C341.24 512 351.985 501.256 351.985 488.002V448H383.983C419.326 448 447.977 419.348 447.977 384.004V320H479.975C503.098 320 518.596 296.125 509.223 275Z" })
  }
));
HeadSideBrainRegular.displayName = "HeadSideBrainRegular";
var HeadSideBrain_default = HeadSideBrainRegular;
